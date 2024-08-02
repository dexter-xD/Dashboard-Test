import { Hono } from 'hono';
import { HomepageHandler } from '../handler/page.handler';
import Contact from '../www/pages/Contact';

// All the private pages will be registered here.
const privatePageRoutes = (router: Hono) => {
  // router.use(authorizeMiddleware);
  // TODO: Might be better to use a redirect middleware.
};

// All the public pages will be registered here.
const publicPageRoutes = (router: Hono) => {
  router.get('/', HomepageHandler);
  router.get('/contact', (c) => c.html(Contact()));
};

export const pagesRoutes = new Hono();
publicPageRoutes(pagesRoutes);
privatePageRoutes(pagesRoutes);
