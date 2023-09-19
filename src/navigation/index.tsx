import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from '../areas/LandingPage';
import TestPage from '../areas/TestPage';

const Stack = createNativeStackNavigator();

const RootStack = () => 
  <Stack.Navigator
    initialRouteName="LandingPage"
  >
    <Stack.Screen component={LandingPage} name="LandingPage" />
    <Stack.Screen component={TestPage} name='TestPage' />
  </Stack.Navigator>

const RootNavigator = () => 
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>

export default RootNavigator;