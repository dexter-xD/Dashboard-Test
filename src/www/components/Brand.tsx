import { JSX } from 'hono/jsx';
import { cn } from '../../utils/utils';

type Props = {
  disabledLink?: boolean;
} & JSX.IntrinsicElements['div'];

const Brand = ({ disabledLink, ...props }: Props) => {
  if (disabledLink) {
    return (
      <div {...props} class={cn('flex cursor-pointer items-center gap-3', props.class)}>
        <img
          src='/public/assets/logo-light.png'
          alt='EDev Dashboard'
          class='h-10 w-10 rounded-md'
        />
        <h1 class='text-2xl font-semibold'>Dashboard</h1>
      </div>
    );
  }

  return (
    <div {...props} class={cn('flex cursor-pointer items-center gap-3', props.class)}>
      <img src='/public/assets/logo-light.png' alt='EDev Dashboard' class='h-10 w-10 rounded-md' />
      <a href='/' hx-boost='true'>
        <h1 class='text-2xl font-semibold'>Dashboard</h1>
      </a>
    </div>
  );
};

export default Brand;
