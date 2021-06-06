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

const BasicFormPage = ({handleUpdateData, lastName, firstName}) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {lastName, firstName},
  });

  const {handleStepUpdate} = updateStep();
  useFocusEffect(
    React.useCallback(() => {
      handleStepUpdate(0);
    }, []),
  );

  const onNext = values => {
    handleUpdateData(values);
    navigation.navigate('Address');
  };

  return (
    <PageContainer>
      <View style={[styles.container]}>
        <BackButtonWrapper
          back={() => navigation.goBack()}
          heading="Hey! buddy"
        />
        <View style={[styles.formContainer]}>
          <Controller
            control={control}
            name="firstName"
            render={({field: {onChange, onBlur, value, ref}}) => (
              <TextInput
                label={
                  <Text>
                    Let's start with your{' '}
                    <Text style={{fontWeight: 'bold'}}>first name</Text>.
                  </Text>
                }
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                error={errors['firstName'] && errors['firstName'].message}
                placeholder="First Name"
              />
            )}
            rules={{
              required: 'I really want know your name',
              maxLength: {
                value: 15,
                message: 'Hey, buddy can you try under 15 Characters',
              },
            }}
          />
          <Controller
            control={control}
            name="lastName"
            render={({field: {onChange, onBlur, value, ref}}) => (
              <TextInput
                label={
                  <Text>
                    And your{' '}
                    <Text style={{fontWeight: 'bold'}}>last name?</Text>
                  </Text>
                }
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Last Name"
                inputRef={ref}
                error={errors['lastName'] && errors['lastName'].message}
              />
            )}
            rules={{
              required: 'I really want know your family name',
              maxLength: {
                value: 15,
                message: 'Hey, buddy can you try under 15 Characters',
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
    marginTop: 90,
  },
});

const mapStateToProps = state => ({
  lastName: state.onboarding.data.lastName,
  firstName: state.onboarding.data.firstName,
});
const mapDispatchToProps = dispatch => ({
  handleUpdateData: data => {
    dispatch(updateData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicFormPage);
