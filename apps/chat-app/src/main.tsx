import './global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App';
// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { ThemeProvider } from './ThemeProvider';
import { createRouter, RouterProvider } from '@tanstack/react-router';

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeProvider>
      <App />
    </ThemeProvider> */}
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
