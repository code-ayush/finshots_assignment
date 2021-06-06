/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import updateStep from '../../../utils/updateStep';
import TextInput from '../../../components/TextInput';
import PageContainer from '../../../components/PageContainer';
import ButtonWrapper from '../../../components/NextButtonWrapper';
import {updateData} from '../../../store/actions/onBoardingAction';
import BackButtonWrapper from '../../../components/BackButtonWrapper';

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const AddressFormPage = ({handleUpdateData, firstName, email}) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {email},
  });

  const {handleStepUpdate} = updateStep();
  useFocusEffect(
    React.useCallback(() => {
      handleStepUpdate(1);
    }, []),
  );

  const onNext = values => {
    handleUpdateData(values);
    navigation.navigate('Credential');
  };

  return (
    <PageContainer>
      <View style={[styles.container]}>
        <BackButtonWrapper
          back={() => navigation.goBack()}
          heading="Some extra details"
        />
        <View style={[styles.formContainer]}>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, onBlur, value, ref}}) => (
              <TextInput
                label={
                  <Text>
                    What{' '}
                    <Text style={{fontWeight: 'bold'}}>email address </Text>
                    can we reach you at? {'\n'}This is only to get in touch{' '}
                    {firstName}, {'\n'}not to send spam.
                  </Text>
                }
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                placeholder="Email Address"
                error={errors['email'] && errors['email'].message}
              />
            )}
            rules={{
              required: 'Buddy, email address is required',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Not a valid email',
              },
              maxLength: {
                value: 60,
                message: "It's too long to be a email address",
              },
            }}
          />
        </View>
        <ButtonWrapper next={handleSubmit(onNext)} disabled={!isValid} />
      </View>
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
});

const mapStateToProps = state => ({
  firstName: state.onboarding.data.firstName,
  email: state.onboarding.data.email,
});
const mapDispatchToProps = dispatch => ({
  handleUpdateData: data => {
    dispatch(updateData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressFormPage);
