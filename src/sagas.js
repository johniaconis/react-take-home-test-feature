import { getAsyncInjectors } from 'store/utils';
import globalSagas from 'modules/global/sagas';
import userSagas from 'modules/user/sagas';
import labelSagas from 'modules/labels/sagas';
import autoCompleteSagas from 'modules/autoComplete/sagas';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createSagas(store) {
  const { injectSagas } = getAsyncInjectors(store);
  // inject any other sagas here

  const rootSagas = [
    ...globalSagas,
    ...autoCompleteSagas,
    ...userSagas,
    ...labelSagas,
  ];

  injectSagas('root', rootSagas);
}
