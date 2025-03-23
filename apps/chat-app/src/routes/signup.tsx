import { createFileRoute } from '@tanstack/react-router';
import { Login } from 'features';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Login />;
}
