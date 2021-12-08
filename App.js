import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigation';

import AuthStateProvider from './src/context/auth/AuthState';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStateProvider>
        <StackNavigator />  
      </AuthStateProvider>
    </NavigationContainer>
  )
}

export default App
