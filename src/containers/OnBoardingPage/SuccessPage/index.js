/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import updateStep from '../../../utils/updateStep';
import PageContainer from '../../../components/PageContainer';
import {resetData} from '../../../store/actions/onBoardingAction';
import ButtonWrapper from '../../../components/NextButtonWrapper';
import BackButtonWrapper from '../../../components/BackButtonWrapper';

const SuccessPage = ({firstName, handleResetData}) => {
  const navigation = useNavigation();
  const {handleStepUpdate} = updateStep();
  useFocusEffect(
    React.useCallback(() => {
      handleStepUpdate(3);
    }, []),
  );

  return (
    <PageContainer noScroll>
      <View style={[styles.container]}>
        <BackButtonWrapper
          back={() => navigation.goBack()}
          heading="Finally..."
        />

        <Text style={[styles.title]}>Congrats</Text>
        <Text style={[styles.name]}>{firstName}</Text>
        <Text style={[styles.description]}>
          You are successful to join Finshots{'\n'}you will start getting daily
          dose of the latest,{'\n'}most important Financial development
          delivered in plain English.{'\n'}
          In less than 3 minutes.
        </Text>
        <Image
          style={[styles.logo]}
          resizeMode="contain"
          resizeMethod="auto"
          source={{
            uri: 'https://d3jlwjv6gmyigl.cloudfront.net/assets/two/images/logo-2d6831bc63e1ecb76091541e2f20069a.png',
          }}
        />
        <Text style={[styles.footerTitle]}>If you want to Register again.</Text>
        <ButtonWrapper
          next={() => {
            handleResetData();
            navigation.reset({
              index: 0,
              routes: [{name: 'CreateAccount'}],
            });
          }}
          reset="Reset"
        />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  logo: {
    height: 35,
    width: 136,
    marginVertical: 20,
  },
  title: {
    paddingTop: 20,
    fontSize: 65,
    fontWeight: '700',
    lineHeight: 65,
    color: '#0f2137',
  },
  name: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 32,
    color: '#FF9F1C',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#343d48cc',
    width: '90%',
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f2137',
    marginTop: 50,
  },
});

const mapStateToProps = state => ({
  firstName: state.onboarding.data.firstName,
});
const mapDispatchToProps = dispatch => ({
  handleResetData: data => {
    dispatch(resetData(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SuccessPage);
