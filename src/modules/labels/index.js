const initialState = {
  loading: false,
  loaded: false,
  error: false,
  errorMessage: '',
  errorStatus: null,
  displayMap: null,
};

const LOAD_GLOBAL_LABELS_REQUEST = 'LABELS/LOAD_LABELS_REQUEST';
const LOAD_GLOBAL_LABELS_SUCCESS = 'LABELS/LOAD_LABELS_SUCCESS';
const LOAD_GLOBAL_LABELS_FAILURE = 'LABELS/LOAD_LABELS_FAIL';

function loadLabels() {
  return { type: LOAD_GLOBAL_LABELS_REQUEST };
}

function loadLabelsFailure(errorMessage, errorStatus) {
  return { type: LOAD_GLOBAL_LABELS_FAILURE, errorMessage, errorStatus };
}

function loadLabelsSuccess(displayMap) {
  return { type: LOAD_GLOBAL_LABELS_SUCCESS, displayMap };
}
function labelsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GLOBAL_LABELS_REQUEST: {
      return {
        ...state, loading: true,
      };
    }
    case LOAD_GLOBAL_LABELS_SUCCESS: {
      const { displayMap } = action;
      return {
        ...state, loading: false, error: false, errorMessage: '', loaded: true, displayMap,
      };
    }
    case LOAD_GLOBAL_LABELS_FAILURE: {
      const { errorMessage, errorStatus } = action;
      return {
        ...state, loading: true, error: true, errorMessage, errorStatus,
      };
    }
    default:
      return state;
  }
}

export const actions = {
  loadLabels,
  loadLabelsSuccess,
  loadLabelsFailure,
};

export const actionTypes = {
  LOAD_GLOBAL_LABELS_REQUEST,
  LOAD_GLOBAL_LABELS_SUCCESS,
  LOAD_GLOBAL_LABELS_FAILURE,
};

export default labelsReducer;
