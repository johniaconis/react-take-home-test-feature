/**
 * SAGAS belong in here that apply to the global module/level
 */

import { takeEvery, select } from 'redux-saga/effects';
import { actionTypes } from './index';
import { message, notification, Modal } from 'antd';
import { omit } from 'lodash';
import { promptMessageSelecor } from './selectors';

notification.config({
  duration: 5,
});

const { SHOW_GLOBAL_ERROR, SHOW_NOTIFICATION, PROMPT_ON_LEAVE } = actionTypes;

function* promptOnLeaveSaga(action) {
  const { toDestination } = action;
  const content = yield select(promptMessageSelecor);

  Modal.confirm({
    title: 'Are you sure you want to navigate away?',
    content,
    onOk() {
      toDestination();
    },
  });
}

export function* showGlobalError() {
  yield takeEvery(SHOW_GLOBAL_ERROR, (action) => {
    message.error(action.message);
  });
}

function* watchShowNotification() {
  yield takeEvery(SHOW_NOTIFICATION, (action) => {
    const { notificationType = 'open' } = action;
    notification[notificationType]({
      ...omit(action, ['type', 'notificationType']),
    });
  });
}

function* watchPromptOnLeave() {
  yield takeEvery(PROMPT_ON_LEAVE, promptOnLeaveSaga);
}

export default [watchShowNotification, watchPromptOnLeave, showGlobalError];
