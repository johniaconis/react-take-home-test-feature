import { createSelector } from 'reselect';

const routeSelector = (state) => state.todos;
const titleSelector = createSelector(routeSelector, (route) => route.title);
const stateSelector = createSelector(routeSelector, (route) => ({
  loading: route.loading,
  loaded: route.loaded,
  error: route.error,
}));

export { titleSelector, stateSelector };
