import { z } from 'zod';
import { CreateUser } from '../../../validations/user.validation';

type Props = {
  error?: z.ZodError<CreateUser> | string;
  success?: boolean;
};

const CreateUserForm = ({ error, success = false }: Props) => {
  const err = error && typeof error !== 'string' ? error.flatten().fieldErrors : null;
  return (
    <form hx-post='/api/v1/user/create' hx-target='this' class='mt-6 max-w-md space-y-4'>
      <div>
        <label class='input input-bordered flex h-10 items-center gap-2'>
          Username
          <input type='text' name='username' class='grow' placeholder='Enter username' />
        </label>

        {err?.username && <p class='text-sm text-red-600'>Username: {err.username}</p>}
      </div>
      <div>
        <label class='input input-bordered flex h-10 items-center gap-2'>
          Email
          <input type='text' name='email' class='grow' placeholder='daisy@site.com' />
        </label>
        {err?.email && <p class='text-sm text-red-600'>Email: {err.email}</p>}
      </div>

      <div>
        <label class='input input-bordered flex h-10 items-center gap-2'>
          Password
          <input type='text' name='password' class='grow' placeholder='Enter password' />
        </label>
        {err?.password && <p class='text-sm text-red-600'>Password: {err.password}</p>}
      </div>

      <div>
        <select name='type' placeholder='Select a User Type' class='select select-bordered w-full'>
          <option>superuser</option>
          <option selected>admin</option>
        </select>
        {err?.type && <p class='text-sm text-red-600'>Type: {err.type}</p>}
      </div>

      <button type='submit' class='btn btn-primary'>
        Submit
      </button>

      {error && typeof error === 'string' && <p class='text-red-500'>{error}</p>}

      {success && <p class='text-green-600'>User Created</p>}
    </form>
  );
};

export default CreateUserForm;
