import { View } from 'react-native';
import './base.css';
import { Button, Text } from 'base-component-lib';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        padding: 50,
      }}
    >
      <View style={{ maxHeight: '20%' }}>
        <Button variant='outline'>
          <Text>Some button</Text>
        </Button>
      </View>
    </View>
  );
}
