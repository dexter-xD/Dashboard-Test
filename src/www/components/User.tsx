import { User } from '../../../types';

const User = (props: User) => {
  return (
    <div class='avatar flex items-center'>
      <div class='flex flex-col items-center'>
        <p class='text-sm font-medium'>{props.username}</p>
        <span class='text-xs'>{props.type}</span>
      </div>

      <div class='ml-2 w-12 rounded-full'>
        <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
      </div>
    </div>
  );
};

export default User;
