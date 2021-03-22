import { getAsyncInjectors } from 'store/utils';

export default function createRoutes(store) {
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return {
    path: 'manage',
    name: 'Manage Todos',
    getComponent(nextState, cb) {
      require.ensure(
        [],
        (require) => {
          const sagas = require('./sagas');
          const reducer = require('./modules');
          injectReducer('manageTodos', reducer.default);
          injectSagas('manageTodos', sagas.default);
          const containers = require('./containers');
          cb(null, containers.TodoView);
        },
        'manage_todos'
      );
    },
  };
}
