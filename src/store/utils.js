import createReducer from 'reducers';
import { sanitizedFieldNames } from 'utils/constants';
import { includes } from 'lodash';

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store) {
  return function injectReducer(name, asyncReducer) {
    if (Reflect.has(store.asyncReducers, name)) return;

    /* eslint-disable no-param-reassign */
    store.asyncReducers[name] = asyncReducer;
    /* eslint-enable no-param-reassign */

    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

const injectedSagas = {};

/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store) {
  return function injectSagas(name, sagas) {
    if (injectedSagas[name]) {
      return null;
    }
    injectedSagas[name] = true;
    sagas.map((saga) => store.runSaga(saga));
    return null;
  };
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
  return {
    injectReducer: injectAsyncReducer(store),
    injectSagas: injectAsyncSagas(store),
  };
}

export function sanitize(obj) {
  return JSON.parse(
    JSON.stringify(obj, (key, val) => {
      if (includes(sanitizedFieldNames, key)) {
        return 'HIDDEN_FIELD';
      }
      return val;
    })
  );
}

export function sanitizeState(store) {
  const state = store.getState();
  return sanitize(state);
}
