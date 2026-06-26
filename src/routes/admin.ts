import { Router } from 'express';
import { metrics, orders, restaurants, users } from '../../data/mockData';
import { requireAuth, requireRole } from '../middleware/auth';

export const adminRouter = Router();

adminRouter.use(requireAuth, requireRole('admin'));

adminRouter.get('/overview', (_request, response) => {
  response.json({ metrics, restaurants, usersCount: users.length, ordersCount: orders.length });
});

adminRouter.get('/users', (_request, response) => {
  response.json({ users });
});

adminRouter.get('/restaurants', (_request, response) => {
  response.json({ restaurants });
});
