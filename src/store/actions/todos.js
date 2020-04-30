export function requestTodoList() {
  return {
    type: "REQUEST_TODO_LIST",
  };
}

export function addTodo(text) {
  return {
    type: "ASYNC_ADD_TODO",
    payload: {
      text,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: {
      id,
    },
  };
}
