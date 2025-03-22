import { defineConfig } from 'vite';
import { one } from 'one/vite';

export default defineConfig({
  plugins: [
    // @ts-expect-error -- TODO: need to review why this is throwing a TS error. Seems to work fun at runtime
    one({
      web: {
        defaultRenderMode: 'ssg',
      },
    }),
  ],
});
