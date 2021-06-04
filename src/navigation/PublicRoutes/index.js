/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardingPage from '../../containers/OnBoardingPage';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create Account" component={OnBoardingPage} />
    </Stack.Navigator>
  );
};

export default Navigation;
