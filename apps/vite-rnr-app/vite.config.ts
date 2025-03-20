import { defineConfig, transformWithEsbuild} from 'vite'
import react from '@vitejs/plugin-react'
import reactNativeWeb from "vite-plugin-react-native-web";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/node_modules\/.*\.js$/))  return null

        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    react(),
    reactNativeWeb()
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
})