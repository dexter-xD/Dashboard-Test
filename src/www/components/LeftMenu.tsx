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
        <div className='flex items-center justify-center gap-2'>
          <img src='/public/assets/logo-light.png' alt='Logo' className='w-12 rounded-lg' />
          <h1 className='text-whiter text-4xl font-semibold'>Dashboard</h1>
        </div>
        <ul class='menu min-h-full w-80 bg-base-200 p-4 text-base-content'>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;
