import { Router } from 'express';
import { cuisines, featuredRestaurants, getRestaurantById, restaurants } from '../../data/mockData';

export const restaurantsRouter = Router();

restaurantsRouter.get('/', (_request, response) => {
  response.json({ cuisines, restaurants });
});

restaurantsRouter.get('/featured', (_request, response) => {
  response.json({ restaurants: featuredRestaurants });
});

restaurantsRouter.get('/:id', (request, response) => {
  const restaurant = getRestaurantById(request.params.id);

  if (!restaurant) {
    response.status(404).json({ message: 'Restaurant not found.' });
    return;
  }

  response.json({ restaurant });
});
