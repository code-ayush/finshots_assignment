import {call, put, select, all, takeEvery, delay} from 'redux-saga/effects';

import * as ActionTypes from '../types/onboardingType';
import {saveDataSuccess, saveDataFailure} from '../actions/onBoardingAction';

function* saveDataSaga({data}) {
  const fetchData = values => {
    return values;
  };
  try {
    const payload = yield select(state => state.onboarding.data);
    const response = yield call(fetchData, {...payload, ...data});
    yield delay(1000);
    if (response) {
      yield put(saveDataSuccess(response));
    } else {
      yield put(saveDataFailure('Unable to Update the Details'));
    }
  } catch (error) {
    yield put(saveDataFailure('Unable to Update the Details'));
  }
}

export default function* onBoardingSaga() {
  yield all([yield takeEvery(ActionTypes.SAVE_DATA.REQUEST, saveDataSaga)]);
}
