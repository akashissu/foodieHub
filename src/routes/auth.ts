import { Router } from 'express';
import { z } from 'zod';
import { users } from '../../data/mockData';
import { signToken } from '../lib/jwt';

const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().min(6),
  address: z.string().min(5)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const authRouter = Router();

authRouter.post('/signup', (request, response) => {
  const payload = signupSchema.parse(request.body);
  const existingUser = users.find((user) => user.email.toLowerCase() === payload.email.toLowerCase());

  if (existingUser) {
    response.status(409).json({ message: 'Account already exists.' });
    return;
  }

  const newUser = {
    id: `user-${users.length + 1}`,
    role: 'customer' as const,
    loyaltyPoints: 0,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80',
    ...payload
  };

  users.push(newUser);
  response.status(201).json({ token: signToken(newUser), user: newUser });
});

authRouter.post('/login', (request, response) => {
  const payload = loginSchema.parse(request.body);
  const user = users.find((entry) => entry.email.toLowerCase() === payload.email.toLowerCase());

  if (!user || user.password !== payload.password) {
    response.status(401).json({ message: 'Invalid credentials.' });
    return;
  }

  response.json({ token: signToken(user), user });
});
