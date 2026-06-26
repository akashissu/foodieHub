import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { authRouter } from './routes/auth';
import { restaurantsRouter } from './routes/restaurants';
import { ordersRouter } from './routes/orders';
import { adminRouter } from './routes/admin';
import { ownerRouter } from './routes/owner';
import { usersRouter } from './routes/users';
import { errorHandler } from './middleware/errorHandler';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(morgan('dev'));

  app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', service: 'foodiehub-api', timestamp: new Date().toISOString() });
  });

  app.use('/api/auth', authRouter);
  app.use('/api/restaurants', restaurantsRouter);
  app.use('/api/orders', ordersRouter);
  app.use('/api/admin', adminRouter);
  app.use('/api/owner', ownerRouter);
  app.use('/api/users', usersRouter);

  app.use(errorHandler);

  return app;
}
