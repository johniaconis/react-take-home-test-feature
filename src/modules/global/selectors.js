/**
 * The global state selectors
 */
 import { createSelector } from 'reselect';
 import { get } from 'lodash';

 const makeSelectLocationState = () => {
   let prevRoutingState;

   return (state) => {
     const routingState = state.route; // or state.route

     if (!(routingState === prevRoutingState)) {
       prevRoutingState = routingState;
     }
     return prevRoutingState;
   };
 };

 const promptTransitionSelector = (state) => get(state, 'global.doPromptOnLeave', false);
 const promptMessageSelecor = (state) => get(state, 'global.promptOnLeaveMessage', '');
 const promptWhenSelector = (state) => get(state, 'global.promptWhen', () => true);
 const promptSettingsSelector = createSelector(
  promptTransitionSelector,
  promptWhenSelector,
  (promptTransition, promptWhen) => ({ promptTransition, promptWhen })
 );

 const alertPropsSelector = (channel) => (state) => state.global.alertPropsAll[channel] || {};

 const routeQuerySelector = createSelector(
  makeSelectLocationState,
  (route) => (get(route, 'route.locationBeforeTransitions.query', {}) || {})
);

 const isViewModeSelector = (state) => (
  get(state, 'route.locationBeforeTransitions.query.viewMode', false) === 'true'
);

 const routePathnameSelector = (state) => state.route.locationBeforeTransitions.pathname;

 export {
  alertPropsSelector,
  promptWhenSelector,
  isViewModeSelector,
  promptMessageSelecor,
  makeSelectLocationState,
  routeQuerySelector,
  routePathnameSelector,
  promptTransitionSelector,
  promptSettingsSelector,
};
