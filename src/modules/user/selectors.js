import { createSelector } from 'reselect';

/* eslint max-len: 0 */
const orgObjSelector = (state) => state.user.user.organization;
const userSelector = (state) => state.user.user.id;
const userLoadingSelector = (state) => state.user.loading;
const orgLoadingSelector = (state) => state.user.organization.loading;


const userSelectionLoadingSelector = createSelector(
  userLoadingSelector,
  orgLoadingSelector,
  (userLoading, orgLoading) => (
    userLoading || orgLoading
  )
);

const orgSelector = createSelector(orgObjSelector, (org) => org.id);

export { orgSelector, userSelector, userSelectionLoadingSelector };
