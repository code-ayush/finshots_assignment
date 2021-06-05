import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './WelcomePage';
import SuccessPage from './SuccessPage';
import BasicForm from './BasicFormPage';
import AddressForm from './AddressFormPage';
import CredentialForm from './CredentialFormPage';
import StepHeader from '../../components/StepHeader';

const OnBoardingPage = ({step}) => {
  const Stack = createStackNavigator();
  return (
    <>
      <StepHeader numOfStep={3} step={step} />
      <Stack.Navigator headerMode="none" initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Basic" component={BasicForm} />
        <Stack.Screen name="Address" component={AddressForm} />
        <Stack.Screen name="Credential" component={CredentialForm} />
        <Stack.Screen name="Success" component={SuccessPage} />
      </Stack.Navigator>
    </>
  );
};

const mapStateToProps = state => ({
  step: state.steps.step,
});

export default connect(mapStateToProps, null)(OnBoardingPage);
