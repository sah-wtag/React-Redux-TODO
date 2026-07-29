import { deleted } from "../actions";
import BASE_URL from "../../../utils/apiConfig";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
