import * as ActionTypes from '../types/onboardingType';

export const updateData = data => ({
  type: ActionTypes.UPDATE_DATA,
  data,
});

export const resetData = data => ({
  type: ActionTypes.RESET_DATA,
  data,
});

export const saveDataRequest = data => ({
  type: ActionTypes.SAVE_DATA.REQUEST,
  data,
});

export const saveDataSuccess = data => ({
  type: ActionTypes.SAVE_DATA.SUCCESS,
  data,
});

export const saveDataFailure = error => ({
  type: ActionTypes.SAVE_DATA.FAILURE,
  error,
});
