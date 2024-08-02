import { Hono } from 'hono';
import { createUserHandler } from '../handler/user.handler';
import { authorizeMiddleware } from '../middleware/auth.middleware';

// Register all private api routes in this function
// after the authorize middleware
const privateAPIRoutes = (router: Hono) => {
  router.use(authorizeMiddleware);

  router.post('/user/create', createUserHandler);
};

// Register all public api routes in this function
const publicAPIRoutes = (router: Hono) => {};

export const apiRoutes = new Hono();
publicAPIRoutes(apiRoutes);
privateAPIRoutes(apiRoutes);
