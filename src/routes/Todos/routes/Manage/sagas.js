import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes, actions } from './modules';
import { fetchSaga } from 'store/sagas';

const { LOAD_TODOS } = actionTypes;
const { loadFail, loadSuccess } = actions;

export function* loadTodos(request, action) {
  try {
    // mimic server
    yield delay(2000);
    if (action.error) {
      // noinspection ExceptionCaughtLocallyJS
      throw new Error('not working');
    }
    const todos = [
      {
        id: 1, name: 'Find the meaning of life', completed: true, orderId: 1,
      },
      {
        id: 2, name: 'Learn more about 6sense', completed: false, orderId: 2,
      },
      {
        id: 3, name: 'Meditate', completed: false, orderId: 3,
      },
      {
        id: 4, name: 'Take a barista class', completed: false, orderId: 4,
      },
      {
        id: 5, name: 'Take a bartender class', completed: true, orderId: 5,
      },
      {
        id: 6, name: 'Give to someone in need', completed: true, orderId: 6,
      },
      {
        id: 7, name: 'laugh as much as possible', completed: true, orderId: 7,
      },
      {
        id: 8, name: 'Tell Scott to follow pep8', completed: true, orderId: 8,
      },
      {
        id: 9, name: 'Improve product', completed: false, orderId: 9,
      },
      {
        id: 10, name: 'Zen', completed: false, orderId: 10,
      },
      {
        id: 11, name: 'Finish food', completed: false, orderId: 11,
      },
      {
        id: 12, name: 'Clean room', completed: false, orderId: 12,
      },
      {
        id: 13, name: 'Dance', completed: false, orderId: 13,
      },
      {
        id: 14, name: 'Find Dance Partner', completed: false, orderId: 14,
      },
      {
        id: 15, name: 'Call Doctor', completed: false, orderId: 15,
      },
      {
        id: 16, name: 'Call Dentist', completed: false, orderId: 16,
      },
      {
        id: 17, name: 'Call Mom', completed: false, orderId: 17,
      },
      {
        id: 18, name: 'Call Sister for birthday', completed: false, orderId: 18,
      },
      {
        id: 19, name: 'Organize secure docs', completed: false, orderId: 19,
      },
      {
        id: 20, name: 'Apply for jobs', completed: false, orderId: 20,
      },
    ];

    yield put(loadSuccess(todos));
  } catch (e) {
    yield put(loadFail(e));
  }
}

/**
 * Saga manages page-load calls
 */
export function* watchTodos(request) {
  yield takeLatest(LOAD_TODOS, loadTodos, request);
}


export default [
  fetchSaga(watchTodos),
];
