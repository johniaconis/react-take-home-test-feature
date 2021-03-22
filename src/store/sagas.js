/**
 * This file should ONLY be used for UTILITY sagas in composition.
 * If you are including a saga at the top-level of the application,
 * IT DOES NOT BELONG HERE.  It belongs in the modules folder.
 */

import request from 'utils/request';
import { take, call, fork, put, select } from 'redux-saga/effects';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import { clearSyncErrors, setPublishFailed } from 'store/actions';
import { codes } from '../utils/constants';
import { actions } from 'modules/global';

const { showGlobalNotFound } = actions;
const { HTTP_403_FORBIDDEN, HTTP_401_UNAUTHORIZED, HTTP_404_NOT_FOUND } = codes;

const requestCall = function* fetch(url, method, options = {}, errorHandler) {
  try {
    return yield call(request, url, method, options, errorHandler);
  } catch (e) {
    if (e.errorStatus === HTTP_403_FORBIDDEN || e.errorStatus === HTTP_401_UNAUTHORIZED) {
      // include unauthorized logic flow here for the future
      // and a location change to the login screen for example
    }

    if (e.errorStatus === HTTP_404_NOT_FOUND) {
      yield put(showGlobalNotFound(true));
    }
    throw e;
  }
};

export function fetchSaga(saga) {
  return function* setSaga() {
    yield fork(function* setTask() {
      // we can also include retries here if we do a small refactor
      yield call(saga, requestCall);
    });

    // if status 403 or 401 we transition to the login page and cancel
    // this running saga
    // temporarily deactivate this and update logic later
    // yield take(LOCATION_CHANGE);
    // yield cancel(task);
  };
}

/* eslint no-constant-condition: 0 */
/* eslint func-names: 0 */
function* takeEarliest(pattern, saga, ...args) {
  const task = yield fork(function* () {
    let lastTask;
    while (true) {
      const action = yield take(pattern);
      if (!lastTask || !lastTask.isRunning()) {
        lastTask = yield fork(saga, ...args.concat(action));
      }
    }
  });
  return task;
}

function* run(requestAction, successPattern, failurePattern) {
  // FYC function to run an api call
  yield put(requestAction());
  const action = yield take([successPattern, failurePattern]);
  if (action.type === failurePattern) {
    const error = new Error(action.errorMessage);
    error.errorStatus = action.errorStatus;
    error.errorMessage = action.errorMessage;
    return error;
  }
  return action;
}

function submitFormSaga(publishSaga, formName, failureAction) {
  return function* publisher(...args) {
    try {
      yield put(startSubmit(formName));
      const body = yield select(getFormValues(formName));
      yield call(publishSaga, body, ...args);
      yield put(stopSubmit(formName));
      // yield put(reset(formName));
      return;
    } catch (submissionError) {
      let errors = {};
      let fields = [];
      if (submissionError) {
        // if submission error is not defined something really bad happend
        errors = submissionError.errors;
        fields = Object.keys(errors);
      }
      yield put(stopSubmit(formName, errors));
      yield put(clearSyncErrors(formName));
      yield put(setPublishFailed(formName, fields));
      yield put(failureAction(submissionError));
      const err = new Error();
      err.errorStatus = errors.errorStatus;
      err.errorMessage = errors.errorMessage;
      throw err; // throw error instead of returning error
    }
  };
}

export { submitFormSaga, takeEarliest, run };
