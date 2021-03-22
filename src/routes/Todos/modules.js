const initialState = {
  loaded: false,
  loading: false,
  error: false,
  title: null,
};

const LOAD_TITLE = 'todos/LOAD_TITLE';
const LOAD_TITLE_SUCCESS = 'todos/LOAD_TITLE_SUCCESS';
const LOAD_TITLE_FAILURE = 'todos/LOAD_TITLE_FAILURE';

// error argument is only there to mimic the error button -
// this should not be there in a real app
function loadTitle(error) {
  return { type: LOAD_TITLE, error };
}

function loadTitleSuccess(title) {
  return { type: LOAD_TITLE_SUCCESS, title };
}

function loadTitleFailure(error) {
  return { type: LOAD_TITLE_FAILURE, error };
}


function todosReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TITLE: {
      return { ...state, loading: true };
    }
    case LOAD_TITLE_SUCCESS: {
      const { title } = action;

      return { ...state, loading: false, loaded: true, title };
    }
    case LOAD_TITLE_FAILURE: {
      return { ...state, loading: false, error: true };
    }
    default:
      return state;
  }
}

export const actions = {
  // the load HOC requires the property be called load
  load: loadTitle,
  loadTitleSuccess,
  loadTitleFailure,
};

export const actionTypes = {
  LOAD_TITLE,
};

export default todosReducer;
