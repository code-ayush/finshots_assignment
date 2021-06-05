/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {connect} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {Text, View, StyleSheet, Alert, ActivityIndicator} from 'react-native';

import updateStep from '../../../utils/updateStep';
import TextInput from '../../../components/TextInput';
import PageContainer from '../../../components/PageContainer';
import {saveDataRequest} from '../../../store/actions/onBoardingAction';
import ButtonWrapper from '../../../components/NextButtonWrapper';
import BackButtonWrapper from '../../../components/BackButtonWrapper';

const AddressFormPage = ({
  handleSaveData,
  username,
  password,
  apiStatus,
  error,
}) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {username, password},
  });

  const {handleStepUpdate} = updateStep();
  useFocusEffect(
    React.useCallback(() => {
      handleStepUpdate(2);
    }, []),
  );

  const onNext = values => {
    handleSaveData(values);
  };
  React.useEffect(() => {
    if (apiStatus === 'SUCCESS') {
      navigation.navigate('Success');
    }
    if (apiStatus === 'FAILURE') {
      Alert.alert('Error', error);
    }
  }, [apiStatus]);

  return (
    <PageContainer noScroll>
      {apiStatus === 'PROCESSING' ? (
        <View style={[styles.loader]}>
          <ActivityIndicator size="large" color="#084C61" />
        </View>
      ) : (
        <View style={[styles.container]}>
          <BackButtonWrapper
            back={() => navigation.goBack()}
            heading="Almost done, Buddy."
          />
          <View style={[styles.formContainer]}>
            <Controller
              control={control}
              name="username"
              render={({field: {onChange, onBlur, value, ref}}) => (
                <TextInput
                  label={
                    <Text>
                      What <Text style={{fontWeight: 'bold'}}>user name </Text>
                      will you prefer?
                    </Text>
                  }
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Username"
                  inputRef={ref}
                  error={errors['username'] && errors['username'].message}
                />
              )}
              rules={{
                required: 'Buddy, Username is required during login',
                maxLength: {
                  value: 10,
                  message: 'Username can be of 10 char only.',
                },
              }}
            />
            <Controller
              control={control}
              name="password"
              render={({field: {onChange, onBlur, value, ref}}) => (
                <TextInput
                  label={
                    <Text>
                      What <Text style={{fontWeight: 'bold'}}>user name </Text>
                      will you prefer?
                    </Text>
                  }
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  inputRef={ref}
                  placeholder="Password"
                  passwordField={true}
                  error={errors['password'] && errors['password'].message}
                />
              )}
              rules={{
                required: 'Without password its not possible to login',
                minLength: {
                  value: 8,
                  message: 'Password can be of 8 char at-least.',
                },
                maxLength: {
                  value: 12,
                  message: 'Password can be of 12 char only.',
                },
              }}
            />
          </View>
          <ButtonWrapper
            next={handleSubmit(onNext)}
            disabled={!isValid || apiStatus === 'PROCESSING'}
          />
        </View>
      )}
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  formContainer: {
    marginTop: 70,
  },
  loader: {
    marginVertical: '60%',
  },
});

const mapStateToProps = state => ({
  username: state.onboarding.data.username,
  password: state.onboarding.data.password,
  apiStatus: state.onboarding.apiStatus,
  error: state.onboarding.error,
});
const mapDispatchToProps = dispatch => ({
  handleSaveData: data => {
    dispatch(saveDataRequest(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressFormPage);
