const initialState = {
  user: {},
  loading: false,
  loaded: false,
  error: false,
  errorMessage: '',
  organization: {
    loading: true,
    loaded: false,
    error: false,
  },
};

const LOAD_USER = 'USER/LOAD';
const LOAD_USER_SUCCESS = 'USER/SUCCESS';
const LOAD_USER_FAIL = 'USER/ERROR';

function load() {
  return { type: LOAD_USER };
}

function loadSuccess(user) {
  return { type: LOAD_USER_SUCCESS, user };
}

function loadFail() {
  return { type: LOAD_USER_FAIL };
}

const LOAD_ORG_REQUEST = 'USER/LOAD_ORG_REQUEST';
const LOAD_ORG_SUCCESS = 'USER/LOAD_ORG_SUCCESS';
const LOAD_ORG_FAILURE = 'USER/LOAD_ORG_FAILURE';

function loadOrg() {
  return { type: LOAD_ORG_REQUEST };
}

function loadOrgSuccess(org) {
  return { type: LOAD_ORG_SUCCESS, org };
}

function loadOrgFailure(errorStatus, errorMessage) {
  return { type: LOAD_ORG_FAILURE, errorMessage, errorStatus };
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER: {
      return {
        ...state, loading: true,
      };
    }
    case LOAD_USER_SUCCESS: {
      const { user } = action;
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        user,
        loaded: true,
      };
    }
    case LOAD_USER_FAIL: {
      const { message } = action;
      return {
        ...state, loading: false, error: true, errorMessage: message,
      };
    }
    case LOAD_ORG_REQUEST: {
      const { organization } = state;
      return { ...state, organization: { ...organization, loading: true } };
    }
    case LOAD_ORG_SUCCESS: {
      const { organization, user } = state;
      const { org } = action;
      return {
        ...state,
        user: { ...user, organization: { ...user.organization, ...org } },
        organization: {
          ...organization,
          loading: false,
          error: false,
          loaded: true,
        },
      };
    }
    case LOAD_ORG_FAILURE: {
      const { organization } = state;
      return { ...state, organization: { ...organization, loading: false, error: true } };
    }
    default:
      return state;
  }
}

export const actions = {
  load,
  loadSuccess,
  loadFail,
  loadOrg,
  loadOrgFailure,
  loadOrgSuccess,
};

export const actionTypes = {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_ORG_SUCCESS,
};

export default userReducer;
