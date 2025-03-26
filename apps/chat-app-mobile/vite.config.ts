import { defineConfig, transformWithEsbuild } from 'vite';
import { one } from 'one/vite';

export default defineConfig({
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
    // @ts-expect-error -- TODO: need to review why this is throwing a TS error. Seems to work fun at runtime
    one({
      deps: {
        // TODO: if compiling JSX out from `base-component-lib` and bundling the rn-primitives, would we still need this?
        '@rn-primitives/accordion': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/alert-dialog': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/aspect-ratio': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/avatar': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/checkbox': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/collapsible': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/context-menu': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/dialog': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/dropdown-menu': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/hover-card': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/label': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/menubar': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/navigation-menu': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/popover': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/progress': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/radio-group': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/select': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/separator': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/slot': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/switch': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/table': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/tabs': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/toggle': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/toggle-group': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/tooltip': { '**/*.{js,mjs}': ['jsx'] },
        '@rn-primitives/portal': { '**/*.{js,mjs}': ['jsx'] },
      },
      web: {
        defaultRenderMode: 'ssg',
      },
    }),
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
