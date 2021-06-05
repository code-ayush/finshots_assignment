/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {updateStep} from '../store/actions/stepsAction';

export default function useModelPortfolio() {
  const dispatch = useDispatch();
  const handleStepUpdate = useCallback(step => {
    dispatch(updateStep(step));
  }, []);

  return {handleStepUpdate};
}
