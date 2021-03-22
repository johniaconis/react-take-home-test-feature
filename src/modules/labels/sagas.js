import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { fetchSaga } from 'store/sagas';
import { actions } from './index';
import { actionTypes as userActionTypes } from 'modules/user';

const { LOAD_USER_SUCCESS } = userActionTypes;
const { loadLabelsFailure, loadLabelsSuccess } = actions;

export function* loadLabels() {
  try {
    // for now mock an async request
    // however this exists to provide automatic label mapping to backend values
    // see TextMap for example
    yield delay(1000);
    yield put(loadLabelsSuccess({}));
  } catch (e) {
    yield put(loadLabelsFailure(e));
  }
}

export function* watchLoadLabels(request) {
  // wait until after user success since this call will typically rely on org_id
  yield takeLatest(LOAD_USER_SUCCESS, loadLabels, request);
}


export default [
  fetchSaga(watchLoadLabels),
];
