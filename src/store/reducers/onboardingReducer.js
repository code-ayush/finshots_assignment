import * as ActionTypes from '../types/onboardingType';

const INITIAL_STATE = {
  data: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  },
  apiStatus: 'IDLE',
  error: null,
};

function onboardingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA:
      return {
        ...state,
        data: {...state.data, ...action.data},
        error: null,
        apiStatus: 'IDLE',
      };
    case ActionTypes.SAVE_DATA.REQUEST:
      return {
        ...state,
        data: {...state.data, ...action.data},
        apiStatus: 'PROCESSING',
        error: null,
      };
    case ActionTypes.SAVE_DATA.SUCCESS:
      return {
        ...state,
        data: {...state.data, ...action.data},
        apiStatus: 'SUCCESS',
        error: null,
      };
    case ActionTypes.SAVE_DATA.FAILURE:
      return {
        ...state,
        apiStatus: 'FAILURE',
        error: action.error,
      };
    case ActionTypes.RESET_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default onboardingReducer;
