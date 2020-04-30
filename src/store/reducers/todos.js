const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_TODO_LIST":
      return { ...state, loading: true };
    case "SUCCESS_TODO_LIST":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case "FAILURE_TODO_LIST":
      return { ...state, data: [], loading: false, error: true };
    case "ADD_TODO":
      return [
        ...state,
        { id: Math.random(), text: action.payload.text, complete: false },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}
