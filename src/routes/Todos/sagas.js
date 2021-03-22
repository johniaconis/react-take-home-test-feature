import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { fetchSaga } from 'store/sagas';
import { actions, actionTypes } from './modules';

const { LOAD_TITLE } = actionTypes;
const { loadTitleSuccess, loadTitleFailure } = actions;

export function* loadTodoTitle(request, action) {
  try {
    // as an example we mock the request with a delay
    // however, normally you would have an API call here
    yield delay(2000);

    // this is just to mock the error at top level demo
    // you would not do this in real life
    const { error } = action;

    if (error) {
      throw new Error('Demo Failure');
    }

    yield put(loadTitleSuccess('My Amazing Todo List Title'));
  } catch (e) {
    yield put(loadTitleFailure(e));
  }
}

export function* watchLoadTodosTitle(request) {
  yield takeLatest(LOAD_TITLE, loadTodoTitle, request);
}


// always use fetchSaga if you will make an api call
export default [
  fetchSaga(watchLoadTodosTitle),
];
