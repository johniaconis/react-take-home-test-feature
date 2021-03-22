import { userSelector } from 'modules/user/selectors';
import { sanitizeState, sanitize } from 'store/utils';
import { actions } from 'modules/global';
import { GLOBAL_ERROR_MESSAGE } from 'utils/constants';

const { showGlobalError } = actions;

export const crashReport = (store) => (next) => (action) => {
  try {
    // throw it on the event loop so it doesn't block the current flow
    next(action);
  } catch (err) {
    console.error({
      error: err,
      action: sanitize(action),
      state: sanitizeState(store),
      user: userSelector(store.getState()),
    });

    store.dispatch(showGlobalError(GLOBAL_ERROR_MESSAGE));
    if (process.env.NODE_ENV === 'dev') {
      console.log(err.stack); // eslint-disable-line
    }
  }
};
