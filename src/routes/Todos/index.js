import ManageRoute from './routes/Manage';
import { getAsyncInjectors } from 'store/utils';

export default function createRoutes(store) {
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return {
    path: 'todos',
    name: 'Todos',
    indexRoute: {
      onEnter: (nextState, replace) => replace('/todos/manage'),
    },
    getComponent(nextState, cb) {
      require.ensure(
        [],
        (require) => {
          const sagas = require('./sagas');
          const reducer = require('./modules');
          injectReducer('todos', reducer.default);
          injectSagas('todos', sagas.default);
          const containers = require('./containers');
          cb(null, containers.Todos);
        },
        'todos'
      );
    },
    childRoutes: [ManageRoute(store)],
  };
}
