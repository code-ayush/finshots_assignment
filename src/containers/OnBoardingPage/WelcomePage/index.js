/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import updateStep from '../../../utils/updateStep';
import PageContainer from '../../../components/PageContainer';
import ButtonWrapper from '../../../components/NextButtonWrapper';

const WelcomePage = () => {
  const navigation = useNavigation();
  const {handleStepUpdate} = updateStep();
  useFocusEffect(
    React.useCallback(() => {
      handleStepUpdate(0);
    }, []),
  );

  return (
    <PageContainer noScroll={true}>
      <View style={[styles.container]}>
        <Image
          style={[styles.logo]}
          resizeMode="contain"
          resizeMethod="auto"
          source={{
            uri: 'https://d3jlwjv6gmyigl.cloudfront.net/assets/two/images/logo-2d6831bc63e1ecb76091541e2f20069a.png',
          }}
        />
        <Text style={[styles.title]}>Create Account</Text>
        <Text style={[styles.description]}>
          Join Finshots and get your daily dose of the latest, most important
          {'\n'}Financial development delivered in plain English.{'\n'}
          In less than 3 minutes.
        </Text>
        <Text style={[styles.footerTitle]}>Are you ready?</Text>
        <ButtonWrapper next={() => navigation.navigate('Basic')} />
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  logo: {
    height: 35,
    width: 136,
    marginBottom: 15,
    marginLeft: 3,
  },
  title: {
    fontSize: 75,
    fontWeight: '700',
    lineHeight: 75,
    color: '#0f2137',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#343d48cc',
    height: '45%',
    width: '90%',
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f2137',
  },
});

export default WelcomePage;
