import { Router } from 'express';
import { z } from 'zod';
import { getRestaurantById, orders } from '../../data/mockData';
import { requireAuth } from '../middleware/auth';

const createOrderSchema = z.object({
  restaurantId: z.string().min(1),
  items: z.array(
    z.object({
      itemId: z.string().min(1),
      quantity: z.number().int().positive(),
      specialRequest: z.string().optional()
    })
  ).min(1),
  paymentMethod: z.string().min(2)
});

export const ordersRouter = Router();

ordersRouter.get('/', requireAuth, (request, response) => {
  const userOrders = orders.filter((order) => order.userId === request.user?.id);
  response.json({ orders: userOrders });
});

ordersRouter.get('/:id', requireAuth, (request, response) => {
  const order = orders.find((entry) => entry.id === request.params.id && entry.userId === request.user?.id);

  if (!order) {
    response.status(404).json({ message: 'Order not found.' });
    return;
  }

  response.json({ order, restaurant: getRestaurantById(order.restaurantId) });
});

ordersRouter.post('/', requireAuth, (request, response) => {
  const payload = createOrderSchema.parse(request.body);
  const restaurant = getRestaurantById(payload.restaurantId);

  if (!restaurant) {
    response.status(404).json({ message: 'Restaurant not found.' });
    return;
  }

  const total = payload.items.reduce((sum, item) => {
    const menuItem = restaurant.menu.find((entry) => entry.id === item.itemId);
    return sum + (menuItem?.price ?? 0) * item.quantity;
  }, 0);

  const order = {
    id: `ORD-${1000 + orders.length + 1}`,
    userId: request.user!.id,
    restaurantId: payload.restaurantId,
    items: payload.items.map((item) => ({ ...item, restaurantId: payload.restaurantId })),
    status: 'Placed' as const,
    eta: '28 mins',
    total,
    placedAt: new Date().toISOString(),
    paymentMethod: payload.paymentMethod,
    rider: 'Auto-assigned'
  };

  orders.unshift(order);
  response.status(201).json({ order });
});
