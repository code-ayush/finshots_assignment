import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import stepsReducer from './stepsReducer';
import onboardingReducer from './onboardingReducer';

export default combineReducers({
  onboarding: onboardingReducer,
  steps: stepsReducer,
});

export const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
