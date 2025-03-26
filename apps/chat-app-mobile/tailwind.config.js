/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    // TODO: should this be `src` or `dist`??
    '../../packages/features/src/**/*.{ts,tsx}',
    '../../packages/features/dist/**/*.{ts,tsx}',
    // TODO: does adding this help/hurt/do nothing to the text color/theming issue?
    '../../packages/base-component-lib/src/**/*.{ts,tsx}',
    '../../packages/base-component-lib/dist/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  presets: [require('nativewind/preset')],
  plugins: [require('tailwindcss-animate'), require('tailwindcss-motion')],
};
