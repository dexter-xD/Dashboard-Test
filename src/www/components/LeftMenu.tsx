import { JSX, PropsWithChildren } from 'hono/jsx';
import { cn } from '../../utils/utils';

const LeftMenu = (props: PropsWithChildren & JSX.IntrinsicElements['div']) => {
  return (
    <div {...props} class={cn('drawer w-fit overflow-hidden xl:drawer-open', props.class)}>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        <label for='my-drawer-2' class='drawer-button xl:hidden'>
          {props.children}
        </label>
      </div>
      <div class='no-scrollbar drawer-side z-[999] mt-4'>
        <label for='my-drawer-2' aria-label='close sidebar' class='drawer-overlay'></label>
        <div className='mb-4 ml-8 flex items-center justify-start gap-2'>
          <img src='/public/assets/logo-light.png' alt='Logo' className='w-12 rounded-lg' />
          <h1 className='text-whiter text-3xl font-semibold'>Dashboard</h1>
        </div>
        <nav class='menu mt-5 min-h-full w-80 px-4 py-4 text-base-content lg:mt-9 lg:px-6'>
          <div>
            <ul class='mb-5.5 mt-4 flex flex-col gap-2.5 pl-6'>
              <li>
                <a class='text-bodydark2 group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white'>
                  Posts
                </a>
              </li>
              <li>
                <a class='text-bodydark2 group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white'>
                  Users
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu;
