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
        '@rn-primitives/accordion': { '**/*.js': ['jsx'] },
        '@rn-primitives/alert-dialog': { '**/*.js': ['jsx'] },
        '@rn-primitives/aspect-ratio': { '**/*.js': ['jsx'] },
        '@rn-primitives/avatar': { '**/*.js': ['jsx'] },
        '@rn-primitives/checkbox': { '**/*.js': ['jsx'] },
        '@rn-primitives/collapsible': { '**/*.js': ['jsx'] },
        '@rn-primitives/context-menu': { '**/*.js': ['jsx'] },
        '@rn-primitives/dialog': { '**/*.js': ['jsx'] },
        '@rn-primitives/dropdown-menu': { '**/*.js': ['jsx'] },
        '@rn-primitives/hover-card': { '**/*.js': ['jsx'] },
        '@rn-primitives/label': { '**/*.js': ['jsx'] },
        '@rn-primitives/menubar': { '**/*.js': ['jsx'] },
        '@rn-primitives/navigation-menu': { '**/*.js': ['jsx'] },
        '@rn-primitives/popover': { '**/*.js': ['jsx'] },
        '@rn-primitives/progress': { '**/*.js': ['jsx'] },
        '@rn-primitives/radio-group': { '**/*.js': ['jsx'] },
        '@rn-primitives/select': { '**/*.js': ['jsx'] },
        '@rn-primitives/separator': { '**/*.js': ['jsx'] },
        '@rn-primitives/slot': { '**/*.js': ['jsx'] },
        '@rn-primitives/switch': { '**/*.js': ['jsx'] },
        '@rn-primitives/table': { '**/*.js': ['jsx'] },
        '@rn-primitives/tabs': { '**/*.js': ['jsx'] },
        '@rn-primitives/toggle': { '**/*.js': ['jsx'] },
        '@rn-primitives/toggle-group': { '**/*.js': ['jsx'] },
        '@rn-primitives/tooltip': { '**/*.js': ['jsx'] },
        '@rn-primitives/portal': { '**/*.mjs': ['jsx'] },
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
