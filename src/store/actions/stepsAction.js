import {UPDATE_STEPS} from '../types/stepsType';

export const updateStep = step => ({
  type: UPDATE_STEPS,
  step,
});
