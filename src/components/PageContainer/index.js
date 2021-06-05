import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

const PageContainer = ({children, noScroll}) => (
  <View style={[styles.container]}>
    {noScroll ? (
      <View style={[styles.subContainer]}>{children}</View>
    ) : (
      <ScrollView style={[styles.subContainer]}>{children}</ScrollView>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#DCE1DE',
  },
  subContainer: {
    width: '85%',
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#fff',
  },
});

export default PageContainer;
