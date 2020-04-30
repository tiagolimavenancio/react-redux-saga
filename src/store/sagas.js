import {
  takeEvery,
  take,
  takeLatest,
  put,
  select,
  call,
} from "redux-saga/effects";

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " - " + length);
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  try {
    const todos = yield select((state) => state.todos);
    const response = yield call(apiGet, action.payload.text, todos.length);
    yield put({
      type: "ADD_TODO",
      payload: { text: response },
    });
  } catch (error) {
    yield put({
      type: "ERROR_TODO",
      payload: { text: error },
    });
  }
}

export default function* root() {
  yield [takeEvery("ASYNC_ADD_TODO", asyncAddTodo)];
  yield [take("ASYNC_ADD_TODO", asyncAddTodo)];
  yield [takeLatest("ASYNC_ADD_TODO", asyncAddTodo)];
}
