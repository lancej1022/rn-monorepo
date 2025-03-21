import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import reactNativeWeb from 'vite-plugin-react-native-web';
import path from 'path';
import dtsPlugin from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['./src/ui/**/*.tsx'],
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        // TODO: do I need this or nah
        preserveModules: true,
      },
    },
  },

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/node_modules\/.*\.(js|mjs|web\.mjs)$/)) {
          return null;
        }

        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
    react(), // TODO: do I actually want this, or will it cause the compiled output to be borked?
    reactNativeWeb(),
    dtsPlugin({
      compilerOptions: {
        tsBuildInfoFile: 'tsconfig.build.tsbuildinfo',
        outDir: 'dist',
        rootDir: 'src',
        noEmit: false,
      },
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
    // noBundlePlugin({ copy: '**/*.css' }),
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.mjs': 'jsx',
        '.web.mjs': 'jsx',
      },
    },
  },
});
