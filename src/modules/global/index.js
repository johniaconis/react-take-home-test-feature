const initialState = {
  error: false,
  errorMessage: '',
  topError: '',
  notFound: false,
  promptOnLeaveMessage: '',
  doPromptOnLeave: false,
  promptWhen: () => true,
  alertPropsAll: {},
};

const SHOW_GLOBAL_ERROR = 'GLOBAL/TOP_ERROR';
const DISMISS_GLOBAL_ERROR = 'GLOBAL/DISMISS_TOP_ERROR';

function showGlobalError(message) {
  return { type: SHOW_GLOBAL_ERROR, message };
}

function dismissGlobalError() {
  return { type: DISMISS_GLOBAL_ERROR };
}

const UPDATE_ALERT = 'GLOBAL/UPDATE_ALERT';
function updateAlert(channel, alertProps) {
  return { type: UPDATE_ALERT, channel, alertProps };
}

const SHOW_NOTIFICATION = 'GLOBAL/SHOW_NOTIFICATION';
function showNotification(notificationType, message, description) {
  return { type: SHOW_NOTIFICATION, notificationType, message, description };
}

const SET_PROMPT_ON_LEAVE = 'GLOBAL/SET_PROMPT_ON_LEAVE';
const CLEAR_PROMPT_ON_LEAVE = 'GLBOAL/CLEAR_PROMPT_ON_LEAVE';
const PROMPT_ON_LEAVE = 'GLOBAL/PROMPT_ON_LEAVE';
function setPromptOnLeave(message, promptWhen) {
  return { type: SET_PROMPT_ON_LEAVE, message, promptWhen };
}
/**
 *
 * @param {*} toDestination a call back that will send you to the location that
 * you would like to go to.
 */
function promptOnLeave(toDestination) {
  return { type: PROMPT_ON_LEAVE, toDestination };
}
function clearPromptOnLeave() {
  return { type: CLEAR_PROMPT_ON_LEAVE };
}

const SHOW_NOT_FOUND = 'GLOBAL/SHOW_GLOBAL_NOT_FOUND';

function showGlobalNotFound(notFound) {
  return { type: SHOW_NOT_FOUND, notFound };
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_GLOBAL_ERROR: {
      const { message } = action;
      return {
        ...state,
        topError: message,
      };
    }
    case SHOW_NOT_FOUND: {
      const { notFound } = action;
      return {
        ...state,
        notFound,
      };
    }
    case SET_PROMPT_ON_LEAVE: {
      const { message, promptWhen } = action;
      return {
        ...state,
        promptOnLeaveMessage: message,
        promptWhen,
        doPromptOnLeave: true,
      };
    }
    case CLEAR_PROMPT_ON_LEAVE: {
      return {
        ...state,
        promptOnLeaveMessage: '',
        doPromptOnLeave: false,
        promptWhen: () => true,
      };
    }
    case UPDATE_ALERT: {
      const { alertProps = {}, channel } = action;
      const { alertPropsAll } = state;

      return {
        ...state,
        alertPropsAll: { ...alertPropsAll, [channel]: alertProps },
      };
    }
    default:
      return state;
  }
}

export const actions = {
  showGlobalError,
  dismissGlobalError,
  showNotification,
  showGlobalNotFound,
  setPromptOnLeave,
  clearPromptOnLeave,
  promptOnLeave,
  updateAlert,
};

export const actionTypes = {
  SHOW_GLOBAL_ERROR,
  SHOW_NOTIFICATION,
  SHOW_NOT_FOUND,
  PROMPT_ON_LEAVE,
};

export default appReducer;
