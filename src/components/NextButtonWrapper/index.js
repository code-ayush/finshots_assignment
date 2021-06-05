import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const NextButtonWrapper = ({next, disabled, reset}) => (
  <TouchableOpacity
    style={[
      styles.nextButton,
      ...(disabled ? [styles.nextButtonDisable] : []),
      ...(reset ? [styles.resetButton] : []),
    ]}
    onPress={next}
    disabled={disabled}>
    <Text style={[styles.nextTitle, ...(reset ? [styles.resetTitle] : [])]}>
      {reset || 'Next'}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  nextButton: {
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 10,
    backgroundColor: '#FF9F1C',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#F58F00',
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  resetButton: {
    backgroundColor: '#E71D36',
    borderColor: '#B91327',
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginTop: 10,
  },
  nextButtonDisable: {
    backgroundColor: '#DCE1DE',
    borderColor: '#B2BDB6',
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  nextTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  resetTitle: {fontSize: 14, fontWeight: '700'},
});

export default NextButtonWrapper;
