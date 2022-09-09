import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../views/LandingScreen';
import WelcomeScreen from '../views/WelcomScreen';

const Stack = createStackNavigator();

const hide = {headerShown: false};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen name="welcome" component={WelcomeScreen} options={hide} />
      <Stack.Screen name="landing" component={LandingScreen} options={hide} />
    </Stack.Navigator>
  );
};
export default Router;
