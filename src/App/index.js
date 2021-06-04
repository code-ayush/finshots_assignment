/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from '../navigation/PublicRoutes';

const App: () => Node = () => (
  <SafeAreaView style={[styles.container]}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE1DE',
  },
});

export default App;
