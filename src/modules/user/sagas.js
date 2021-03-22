import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { fetchSaga } from 'store/sagas';
import { actions as globalActions } from 'modules/global';
import { actionTypes, actions } from './index';
import { GLOBAL_ERROR_MESSAGE } from 'utils/constants';

const { LOAD_USER, LOAD_USER_SUCCESS } = actionTypes;
const { loadFail, loadSuccess, loadOrgSuccess, loadOrgFailure } = actions;
const { showGlobalError } = globalActions;

export function* loadUser() {
  try {
    // const endpoint = 'auth/auth_user/';
    // const user = yield call(request, endpoint);
    yield delay(1000);
    const user = {
      org_id: 1,
      username: 'yo@6sense.com',
      email: 'yo@6sense.com',
    };
    yield put(loadSuccess(user));

    const { heap } = window;
    if (heap) {
      heap.identify(user.username);
      heap.addUserProperties(user);
    }
  } catch (e) {
    yield put(showGlobalError(GLOBAL_ERROR_MESSAGE));
    yield put(loadFail());
  }
}

function* loadOrgSaga() {
  try {
    // const orgId = yield select(orgSelector);
    // const endpoint = `org/${orgId}/`;
    // const org = yield call(request, endpoint);
    yield delay(1000);
    const org = {
      name: '6sense',
      id: 1,
      display_name: '6sense',
    };

    const { heap } = window;
    if (heap) {
      heap.addUserProperties({ org: org.name });
    }

    yield put(loadOrgSuccess(org));
  } catch (e) {
    yield put(loadOrgFailure());
  }
}

/**
 * Saga manages page-load calls
 */
export function* watchLoadUserSuccess(request) {
  // React to user loading successfully
  yield takeLatest(LOAD_USER_SUCCESS, loadOrgSaga, request);
}

/**
 * Saga manages page-load calls
 */
export function* watchAuth(request) {
  yield takeLatest(LOAD_USER, loadUser, request);
}

export default [
  fetchSaga(watchLoadUserSuccess),
  fetchSaga(watchAuth),
];
