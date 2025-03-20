import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Button } from '../components/ui/button';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='max-w-[300px]'>
        <Button className='bg-green-400'>text</Button>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
