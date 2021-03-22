import { createSelector } from 'reselect';
import { filter, take } from 'lodash';

const manageSelector = (state) => state.manageTodos;

const todosSelector = createSelector(manageSelector, (manage) => manage.todos);

export const paginationSelector = createSelector(manageSelector, (manage) => ({
  offset: manage.offset,
  pageSize: manage.pageSize,
}));

const incompleteTodosSelector = createSelector(
  todosSelector,
  (todos) => filter(todos, (todo) => !todo.completed)
);

// BIG DISCLAIMER - this is a frontend hack to mimic pagination
// Pagination should typically be managed by the server, not by a selector that limits
// the results
export const contextSelector = createSelector(
  manageSelector,
  incompleteTodosSelector,
  (manage, todos) => ({
    loading: manage.loading,
    loaded: manage.loaded,
    error: manage.error,
    alert: manage.addError,
    count: todos.length,
  })
);

// The limit set by pagination is only returned
// BIG DISCLAIMER - this is a frontend hack to mimic pagination
// Pagination should typically be managed by the server, not by a selector that limits
// the results
export const incompleteTodosLimitedSelector = createSelector(
  incompleteTodosSelector,
  paginationSelector,
  (todos, paginationConfig) =>
    take(todos, paginationConfig.offset + paginationConfig.pageSize)
);

export const completedTodosSelector = createSelector(
  todosSelector,
  (todos) => todos.filter((todo) => todo.completed)
);
export const completedTodosSortedSelector = createSelector(
  todosSelector,
  (todos) => todos.filter((todo) => todo.completed).sort((first, second) => {
    const nameA = first.name.toUpperCase();
    const nameB = second.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
);
export const incompleteTodosSortedSelector = createSelector(
  todosSelector,
  (todos) => todos.filter((todo) => !todo.completed).sort((first, second) => {
    const nameA = first.name.toUpperCase();
    const nameB = second.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
);
export const incompleteTodosLimitedSortedSelector = createSelector(
  incompleteTodosSortedSelector,
  paginationSelector,
  (todos, paginationConfig) => take(todos, paginationConfig.offset + paginationConfig.pageSize)
);
