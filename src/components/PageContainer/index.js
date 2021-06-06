import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

const PageContainer = ({children, scroll}) => (
  <View style={[styles.container]}>
    {scroll ? (
      <ScrollView style={[styles.subContainer]}>{children}</ScrollView>
    ) : (
      <View style={[styles.subContainer]}>{children}</View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#DCE1DE',
  },
  subContainer: {
    minHeight: '85%',
    width: '85%',
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#fff',
  },
});

export default PageContainer;
