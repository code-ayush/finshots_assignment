/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Animated, View, Text} from 'react-native';

const StepHeader = ({numOfStep, step}) => {
  const nodeColor = node => {
    if (node === step) {
      return {backgroundColor: 'transparent', borderColor: '#084C61'};
    }
    if (node >= step) {
      return {backgroundColor: 'transparent', borderColor: '#90ABB6'};
    }
    if (node <= step) {
      return {backgroundColor: '#084C61', borderColor: '#084C61'};
    }
  };
  return (
    <View style={[styles.container]}>
      {[...Array(numOfStep)].map((e, i) => (
        <React.Fragment key={i}>
          <View
            style={[
              styles.circle,
              {
                backgroundColor: nodeColor(i).backgroundColor,
                borderColor: nodeColor(i).borderColor,
              },
            ]}
          />
          {i !== numOfStep - 1 && (
            <View
              style={[styles.row, {width: `${100 / ((3 * numOfStep) / 2)}%`}]}>
              <Animated.View
                style={[
                  styles.bar,
                  {
                    width: i <= step - 1 && '100%',
                  },
                ]}
              />
            </View>
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCE1DE',
    height: '15%',
  },
  bar: {
    height: '100%',
    backgroundColor: '#084C61',
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 50,
    borderWidth: 4,
    zIndex: 10,
  },
  row: {
    height: 4,
    marginRight: -1,
    marginLeft: -1,
    backgroundColor: '#90ABB6',
  },
});

export default StepHeader;
