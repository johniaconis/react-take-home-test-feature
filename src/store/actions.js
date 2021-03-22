import { submit, reset } from 'redux-form';

export function resetForm(formName) {
  return reset(formName);
}

export function publishForm(formName) {
  return submit(formName);
}
export function clearSyncErrors(formName) {
  return {
    type: '@@redux-form/UPDATE_SYNC_ERRORS',
    meta: {
      form: formName,
    },
    payload: {
      syncErrors: {},
    },
  };
}
export function setPublishFailed(formName, failedFields) {
  return {
    type: '@@redux-form/SET_SUBMIT_FAILED',
    meta: {
      form: formName,
      fields: failedFields,
    },
    error: true,
  };
}

export function setSyncErrors(formName, syncErrors) {
  return {
    type: '@@redux-form/UPDATE_SYNC_ERRORS',
    meta: {
      form: formName,
    },
    payload: {
      syncErrors,
    },
  };
}

export const actions = {
  resetForm,
  publishForm,
  clearSyncErrors,
  setPublishFailed,
  setSyncErrors,
};
