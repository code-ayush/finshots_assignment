import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './WelcomePage';
import SuccessPage from './SuccessPage';
import BasicForm from './BasicFormPage';
import AddressForm from './AddressFormPage';
import CredentialForm from './CredentialFormPage';
import StepHeader from '../../components/StepHeader';

const OnBoardingPage = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <StepHeader />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Basic" component={BasicForm} />
        <Stack.Screen name="Address" component={AddressForm} />
        <Stack.Screen name="Credential" component={CredentialForm} />
        <Stack.Screen name="Success" component={SuccessPage} />
      </Stack.Navigator>
    </>
  );
};

export default OnBoardingPage;
