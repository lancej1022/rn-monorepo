import { defineConfig, transformWithEsbuild } from 'vite';
import viteReact from '@vitejs/plugin-react';
import reactNativeWeb from 'vite-plugin-react-native-web';
import tailwindcss from '@tailwindcss/vite';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/node_modules\/.*\.js$/)) return null;

        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
    ,
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    reactNativeWeb(),
    tailwindcss(),
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.mjs': 'jsx',
      },
    },
  },
  // @ts-expect-error need to move the test stuff to a separate vite file
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
