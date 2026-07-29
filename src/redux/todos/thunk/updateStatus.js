import { toggled } from "../actions";
import BASE_URL from "../../../utils/apiConfig";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch, getState) => {
    const currentTodo = getState().todos.find((t) => t.id === todoId);

    const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...currentTodo,
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(toggled(todo.id));
  };
};

export default updateStatus;
