import jwt from 'jsonwebtoken';
import type { UserProfile } from '../../data/mockData';

const JWT_SECRET = process.env.JWT_SECRET || 'foodiehub-dev-secret';

export type AuthPayload = {
  sub: string;
  email: string;
  role: UserProfile['role'];
};

export function signToken(user: UserProfile) {
  return jwt.sign({ sub: user.id, email: user.email, role: user.role } satisfies AuthPayload, JWT_SECRET, {
    expiresIn: '2h'
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as AuthPayload;
}
