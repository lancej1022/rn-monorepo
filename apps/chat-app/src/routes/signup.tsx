import { createFileRoute } from '@tanstack/react-router';
import { LoginScreen } from 'features';

export const Route = createFileRoute('/signup')({
  component: LoginScreen,
});
