import { Context, Next } from 'hono';
import { env } from '../validations/env';
import { HTTPException } from 'hono/http-exception';

// authorizeMiddleware will get the auth token from request header.
// eg. Bearer token, and will compare the token with the one
// in env, if token is invalid the handler will return an
// Unauthorized message.
export const authorizeMiddleware = async (c: Context, next: Next) => {
  const authHeader = c.req.header('Authorization');
  const TOKEN_SECRET = String(env.TOKEN_SECRET);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new HTTPException(401, { message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  if (token !== TOKEN_SECRET) {
    throw new HTTPException(401, { message: 'Unauthorized' });
  }

  await next();
};
