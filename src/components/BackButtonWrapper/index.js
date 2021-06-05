import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

Icon.loadFont();

const BackButtonWrapper = ({back, heading}) => (
  <View style={[styles.container]}>
    <TouchableOpacity style={[styles.backButton]} onPress={back}>
      <Icon
        name="chevron-left"
        size={20}
        color="#fff"
        style={[styles.backTitle]}
      />
    </TouchableOpacity>
    <Text style={[styles.heading]}>{heading}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    shadowColor: 'rgba(0,0,0, 0.4)',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 10,
    backgroundColor: 'rgba(8,76,97,0.6)',
    borderWidth: 1,
    borderColor: 'rgba(8,76,97,0.8)',
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  backTitle: {
    marginLeft: -2,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    flex: 1,
  },
});

export default BackButtonWrapper;
