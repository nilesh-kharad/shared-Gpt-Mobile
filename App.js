import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/rootActivities/Homescreen';
import Signup from './src/rootActivities/Signup';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Shared-Gpt' }} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Sign-Up' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;