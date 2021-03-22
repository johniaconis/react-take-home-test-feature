import { takeLatest, select, put, call } from 'redux-saga/effects';
import { fetchSaga } from 'store/sagas';
import { orgSelector } from 'modules/user/selectors';
import { actionTypes, actions } from 'modules/autoComplete';
import { unpackAutocomplete } from 'modules/autoComplete/utils';

const { LOAD_DATA } = actionTypes;
const { loadSuccess } = actions;

function* loadOptions(request, action) {
  const { column, value, key } = action;

  try {
    const org = yield select(orgSelector);
    const endpoint = `query/${org}/autocomplete/${column}/?input_string=${value}`;
    const options = yield call(request, endpoint);
    const unpackedOptions = unpackAutocomplete(options);
    yield put(loadSuccess(unpackedOptions, column, key));
  } catch (e) {
    // Add logic for load failed
    console.log(e); // eslint-disable-line
  }
}

function* watchLoadAutoComplete(request) {
  yield takeLatest(LOAD_DATA, loadOptions, request);
}

export default [fetchSaga(watchLoadAutoComplete)];
