import { Router } from 'express';
import { orders, users } from '../../data/mockData';
import { requireAuth } from '../middleware/auth';

export const usersRouter = Router();

usersRouter.get('/me', requireAuth, (request, response) => {
  const user = users.find((entry) => entry.id === request.user?.id);

  if (!user) {
    response.status(404).json({ message: 'User not found.' });
    return;
  }

  const history = orders.filter((order) => order.userId === user.id);
  response.json({ user, orders: history });
});
