import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const TextInputContainer = ({
  label,
  onChange,
  onBlur,
  value,
  error,
  inputRef,
  passwordField,
  placeholder,
}) => (
  <View style={[styles.container]}>
    <Text style={[styles.label]}>{label}</Text>
    <TextInput
      style={[
        styles.input,
        ...(value ? [styles.filledInput] : []),
        ...(error ? [styles.errorInput] : []),
      ]}
      onBlur={onBlur}
      ref={inputRef}
      onChangeText={values => onChange(values)}
      value={value}
      secureTextEntry={passwordField}
      placeholder={placeholder}
    />
    <Text style={[styles.error]}>{error && error}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    color: '#0f2137',
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    borderWidth: 2,
    borderColor: '#90ABB6',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    color: '#0D0106',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
    marginHorizontal: 1,
    maxWidth: '100%',
    minWidth: '100%',
  },
  errorInput: {
    borderColor: '#E71D36',
  },
  filledInput: {
    borderColor: '#084C61',
  },
  error: {
    color: '#E71D36',
    fontSize: 12,
    height: 20,
    maxWidth: '90%',
    minWidth: '90%',
  },
});

export default TextInputContainer;
