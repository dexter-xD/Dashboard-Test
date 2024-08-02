import { Context } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { z } from 'zod';

export const errorHandler = async (err: unknown, c: Context) => {
  let status = 500;

  console.error(
    // @ts-ignore, initially the error would be unknown, but that case is handled, this will work correctly, but
    // will fix the type later.
    `HTTP ERROR with status: ${err?.status || status}, err: ${err?.stack} and path: ${c.req.path}`
  );

  if (err instanceof HTTPException) {
    status = err.status;

    return c.json({ status, error: err.message });
  }
  if (err instanceof z.ZodError) {
    return c.json({
      status: 422,
      error: err.flatten().fieldErrors,
    });
  }

  return c.json({ status, error: 'Internal server error' });
};
