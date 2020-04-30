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

function apiGetTodoList(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "fazer café" },
        { id: 2, text: "estudar" },
        { id: 3, text: "let" },
        { id: 4, text: "programar" },
        { id: 5, text: "jogar" },
      ]);
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

function* getTodoList() {
  try {
    const response = yield call(apiGetTodoList);
    yield put({
      type: "SUCCESS_TODO_LIST",
      payload: { data: response },
    });
  } catch (error) {
    yield put({
      type: "FAILURE_TODO_LIST",
    });
  }
}

export default function* root() {
  yield [takeEvery("REQUEST_TODO_LIST", getTodoList)];
}
