import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import createSagas from './sagas';
import { syncHistoryWithStore } from 'react-router-redux';
import { makeSelectLocationState } from 'modules/global/selectors';
import createStore from 'store/createStore';
import favicon from 'images/favicon.ico'; //  eslint-disable-line
import { composeWithDevTools} from 'redux-devtools-extension';

const initialState = {};

const store = createStore(initialState, browserHistory, composeWithDevTools());

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

const MOUNT_NODE = document.getElementById('content');

let render = () => {
  createSagas(store);
  /* eslint-disable global-require */
  const createRoutes = require('routes').default;
  const AppContainer = require('containers/AppContainer/AppContainer').AppContainer;
  /* eslint-enable global-require */

  const rootRoute = {
    component: AppContainer,
    childRoutes: createRoutes(store),
  };

  ReactDOM.render(
    <Provider store={store}>
      <Router
        history={history}
        routes={rootRoute}
        render={// Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())}
      />
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['./routes/index', './containers/AppContainer/AppContainer'], () => {
    const renderApp = render;

    // Wrap render in try/catch
    render = () => {
      try {
        setImmediate(() => {
          ReactDOM.unmountComponentAtNode(MOUNT_NODE);
          renderApp();
        });
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
      }
    };

    render();
  });
}

render();
