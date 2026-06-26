import type { NextFunction, Request, Response } from 'express';
import { users } from '../../data/mockData';
import { verifyToken } from '../lib/jwt';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: 'customer' | 'admin' | 'owner';
      };
    }
  }
}

export function requireAuth(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    response.status(401).json({ message: 'Missing bearer token.' });
    return;
  }

  try {
    const payload = verifyToken(authHeader.replace('Bearer ', ''));
    const user = users.find((entry) => entry.id === payload.sub && entry.email === payload.email);

    if (!user) {
      response.status(401).json({ message: 'User not found for token.' });
      return;
    }

    request.user = { id: user.id, email: user.email, role: user.role };
    next();
  } catch {
    response.status(401).json({ message: 'Invalid or expired token.' });
  }
}

export function requireRole(...roles: Array<'customer' | 'admin' | 'owner'>) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user) {
      response.status(401).json({ message: 'Unauthorized.' });
      return;
    }

    if (!roles.includes(request.user.role)) {
      response.status(403).json({ message: 'Insufficient role.' });
      return;
    }

    next();
  };
}
