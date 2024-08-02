import { Context } from 'hono';

import Home from '../www/pages/Home';

export const HomepageHandler = (c: Context) => {
  return c.html(Home());
};
