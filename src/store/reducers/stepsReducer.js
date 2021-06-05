import {UPDATE_STEPS} from '../types/stepsType';

const INITIAL_STATE = {
  step: 0,
};

function stepsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_STEPS:
      return {
        ...state,
        step: action.step,
      };
    default:
      return state;
  }
}

export default stepsReducer;
