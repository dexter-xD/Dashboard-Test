import { z } from 'zod';
import { USER_TYPE } from '../config/user';

export const createUserSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(4).max(30),
  type: z.enum(USER_TYPE),
});

export type CreateUser = z.infer<typeof createUserSchema>;
