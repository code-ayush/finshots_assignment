/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import {store, persistor} from '../store';
import Navigation from '../navigation/PublicRoutes';
import {navigationRef} from '../navigation/RootNavigation';

const App: () => Node = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView style={[styles.container]}>
        <NavigationContainer ref={navigationRef}>
          <Navigation />
        </NavigationContainer>
      </SafeAreaView>
    </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE1DE',
  },
});

export default App;
