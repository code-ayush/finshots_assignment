import {all} from 'redux-saga/effects';

import OnBoardingSaga from './onBoardingSaga';

export default function* rootSaga() {
  yield all([OnBoardingSaga()]);
}
