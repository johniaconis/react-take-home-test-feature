const initialState = {};

const initialEntityState = {
  loading: false,
  error: false,
  options: [],
};

const INITIALIZE = 'AUTOCOMPLETE/INITIALIZE';
const LOAD_DATA = 'AUTOCOMPLETE/LOAD_DATE';
const LOAD_DATA_SUCCESS = 'AUTOCOMPLETE/SUCCESS';
const LOAD_DATA_FAIL = 'AUTOCOMPLETE/ERROR';

function initialize(column, key) {
  return { type: INITIALIZE, column, key };
}

function loadOptions(value, column, key) {
  return { type: LOAD_DATA, value, column, key };
}

function loadSuccess(options, column, key) {
  return { type: LOAD_DATA_SUCCESS, options, column, key };
}

function loadFail(column, key) {
  return { type: LOAD_DATA_FAIL, column, key };
}

function autoCompleteReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE: {
      const { column, key } = action;

      return { ...state, [column + key]: { ...initialEntityState } };
    }
    case LOAD_DATA: {
      const { column, key } = action;
      const columnState = state[column + key];
      const newColumnState = { ...columnState, loading: true, options: [] };

      return { ...state, [column + key]: newColumnState };
    }
    case LOAD_DATA_FAIL: {
      const { column, key } = action;
      const columnState = state[column + key];
      const newColumnState = { ...columnState, loading: false, error: true };

      return { ...state, [column + key]: newColumnState };
    }
    case LOAD_DATA_SUCCESS: {
      const { column, options, key } = action;
      const columnState = state[column + key];
      const newColumnState = { ...columnState, loading: false, options };
      return { ...state, [column + key]: newColumnState };
    }
    default:
      return state;
  }
}

export const actions = {
  initialize,
  loadSuccess,
  loadOptions,
  loadFail,
};

export const actionTypes = {
  LOAD_DATA,
};

export default autoCompleteReducer;
