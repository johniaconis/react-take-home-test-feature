import { promptSettingsSelector } from 'modules/global/selectors';
import { actions } from 'modules/global';

const { promptOnLeave, clearPromptOnLeave } = actions;

export const stopTransition = (store) => (next) => (action) => {
  // Dont want to show on viewMode
  // const promptTransition = promptTransitionSelector(store.getState());
  const { promptWhen, promptTransition } = promptSettingsSelector(store.getState());
  // const promptWhen = promptWhenSelector(store.getState());

  if (action.type === '@@router/LOCATION_CHANGE' && promptTransition) {
    // This may not be the cleanest way to do it. Can do a small optimization here
    // that we only check for promptTransition when action.Type == '@@router/LOCATION_CHANGE'
    // but i really dont think it will add much and it will become less readable
    const destination = () => next(action);
    const clear = () => next(clearPromptOnLeave());
    const toDestination = () => {
      clear();
      destination();
    };

    if (promptWhen(store.getState())) {
      store.dispatch(promptOnLeave(toDestination));
    } else {
      toDestination();
    }
  } else {
    next(action);
  }
};
