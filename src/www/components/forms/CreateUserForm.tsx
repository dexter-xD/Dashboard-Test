import { z } from 'zod';
import { CreateUser } from '../../../validations/user.validation';

type Props = {
  error?: z.ZodError<CreateUser> | string;
  success?: boolean;
};

const CreateUserForm = ({ error, success = false }: Props) => {
  return (
    <form hx-post='/api/v1/user/create' hx-target='this' class='mt-6 max-w-md space-y-4'>
      <label class='input input-bordered flex h-10 items-center gap-2'>
        Username
        <input type='text' name='username' class='grow' placeholder='Enter username' />
      </label>
      <label class='input input-bordered flex h-10 items-center gap-2'>
        Email
        <input type='text' name='email' class='grow' placeholder='daisy@site.com' />
      </label>
      <label class='input input-bordered flex h-10 items-center gap-2'>
        Password
        <input type='text' name='password' class='grow' placeholder='Enter password' />
      </label>
      <select name='type' placeholder='Select a User Type' class='select select-bordered w-full'>
        <option>superuser</option>
        <option selected>admin</option>
      </select>

      <button type='submit' class='btn btn-primary'>
        Submit
      </button>

      {error &&
        (typeof error === 'string' ? (
          <p class='text-red-500'>{error}</p>
        ) : (
          <div class='text-sm text-red-600'>
            <p>Email: {error.flatten().fieldErrors.email}</p>
            <p>Password: {error.flatten().fieldErrors.password}</p>
            <p>Username: {error.flatten().fieldErrors.username}</p>
            <p>Type: {error.flatten().fieldErrors.type}</p>
          </div>
        ))}

      {success && <p class='text-green-600'>User Created</p>}
    </form>
  );
};

export default CreateUserForm;
