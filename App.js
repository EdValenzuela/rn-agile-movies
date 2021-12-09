import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigation';

import AuthStateProvider from './src/context/auth/AuthState';
import AgileMoviesProvider from './src/context/movies/AgileMoviesState';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStateProvider>
        <AgileMoviesProvider>
          <StackNavigator />   
        </AgileMoviesProvider>
      </AuthStateProvider>
    </NavigationContainer>
  )
}

export default App
