import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './screens/Homepage';
import AddPostScreen from './screens/AddPostScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={screenOptions}
    >
      <Stack.Screen name='HomeScreen' component={Homepage} />
      <Stack.Screen name='AddPostScreen' component={AddPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
