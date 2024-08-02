import { Config } from 'tailwindcss';
import daisyui, { Config as DaisyuiConfig } from 'daisyui';

export default {
  content: ['./src/www/**/*.{html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dark', 'garden'],
    darkTheme: 'dark',
    themeRoot: ':root',
    logs: true,
    prefix: '',
    utils: true,
    styled: true,
    base: true,
  },
} satisfies Config & { daisyui: DaisyuiConfig };
