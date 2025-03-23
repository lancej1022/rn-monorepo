import { Pressable, Image, View } from 'react-native';
import { Text } from '@chat-app/base-component-lib';
import { LoginForm } from './LoginForm';
import { GalleryVerticalEnd } from 'lucide-react-native'; // TODO: convert all `lucide-react` imports to `lucide-react-native`? Check RNR

export function Login() {
  return (
    <View className='grid min-h-svh lg:grid-cols-2'>
      <View className='flex flex-col gap-4 p-6 md:p-10'>
        <View className='flex justify-center gap-2 md:justify-start'>
          <Pressable className='flex items-center gap-2 font-medium'>
            <View className='flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground'>
              <GalleryVerticalEnd className='size-4' />
            </View>
            <Text>Acme Inc.</Text>
          </Pressable>
        </View>
        <View className='flex flex-1 items-center justify-center'>
          <View className='w-full max-w-xs'>
            <LoginForm />
          </View>
        </View>
      </View>
      <View className='relative hidden bg-muted lg:block'>
        <Image
          source={{ uri: '/placeholder.svg' }}
          accessibilityLabel='Image'
          className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </View>
    </View>
  );
}
