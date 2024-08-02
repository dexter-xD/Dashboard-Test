import { Hono } from 'hono';
import { cors } from 'hono/cors';
import connectDB from './config/db.config';
import { logger } from 'hono/logger';
import { csrf } from 'hono/csrf';
import { serveStatic } from '@hono/node-server/serve-static';
import { apiRoutes } from './routes/apiRoutes';
import { pagesRoutes } from './routes/pagesRoutes';
import { errorHandler } from './handler/error.handler';

const createServer = () => {
  const app = new Hono();
  app.use(logger());
  app.use(
    cors({
      origin: ['http://localhost:8000'],
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    })
  );
  app.use(csrf());
  connectDB();

  // All the routes registerd under here will be public and accessible
  // to everyone, without needing of a authorization token.
  app.use(
    '/public/*',
    serveStatic({
      root: './',
      onNotFound: (path) => {
        console.error('No assets found with', path);
      },
    })
  );
  app.use(
    '/scripts/*',
    serveStatic({
      root: './',
      onNotFound: (path) => {
        console.error('No scripts found with', path);
      },
    })
  );
  app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
  app.onError(errorHandler);

  // All routes registered under here will be Pages routes.
  app.route('/', pagesRoutes);

  // All routes registered under here will be API routes,
  // which might return html or json.
  app.route('/api/v1', apiRoutes);

  return app;
};

export default createServer;
