import { Router } from 'express';
import { orders, restaurants } from '../../data/mockData';
import { requireAuth, requireRole } from '../middleware/auth';

export const ownerRouter = Router();

ownerRouter.use(requireAuth, requireRole('owner'));

ownerRouter.get('/dashboard', (request, response) => {
  const ownedRestaurants = restaurants.filter((restaurant) => restaurant.ownerId === request.user?.id);
  const ownedRestaurantIds = new Set(ownedRestaurants.map((restaurant) => restaurant.id));
  const ownerOrders = orders.filter((order) => ownedRestaurantIds.has(order.restaurantId));

  response.json({ restaurants: ownedRestaurants, orders: ownerOrders });
});
