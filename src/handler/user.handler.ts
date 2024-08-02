import { Context } from 'hono';
import User from '../models/User';
import { hashPassword } from '../utils/password';
import { createUserSchema } from '../validations/user.validation';
import CreateUserForm from '../www/components/forms/CreateUserForm';
import { formDataToObject } from '../utils/utils';

// @desc    Create user
// route    POST /api/v1/user
// access   private
export const createUserHandler = async (c: Context) => {
  const formData = await c.req.formData();
  const body = formDataToObject(formData);

  const { success, data: parsedBody, error } = createUserSchema.safeParse(body);

  if (!success || !parsedBody) {
    return c.html(
      CreateUserForm({
        error,
      })
    );
  }

  const existingUser = await User.findOne({ email: parsedBody.email });

  // If user exists in the database
  if (existingUser?.id) {
    return c.html(
      CreateUserForm({
        error: 'User already exists',
      })
    );
  }

  const hashedPassword = await hashPassword(parsedBody.password);
  if (!hashedPassword) {
    return c.html(
      CreateUserForm({
        error: 'Something went wrong while hashing the password',
      })
    );
  }

  const newUser = new User({ ...parsedBody, password: hashedPassword });
  const createdUser = await newUser.save();

  if (!createdUser) {
    return c.html(
      CreateUserForm({
        error: 'Failed to create the user',
      })
    );
  }

  return c.html(
    CreateUserForm({
      success: true,
    })
  );
};
