import { colorSelected } from "../actions";
import BASE_URL from "../../../utils/apiConfig";
import isLocal from "../../../utils/isLocal";
import fetchTodos from "./featchTodos";

const updateColor = (todoId, color) => {
  return async (dispatch, getState) => {
    const currentTodo = getState().todos.find((t) => t.id === todoId);

    const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...currentTodo,
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(colorSelected(todo.id, todo.color));

    // ForceFully rendering all todos when in server
    if (!isLocal) {
      dispatch(fetchTodos);
    }
  };
};

export default updateColor;
