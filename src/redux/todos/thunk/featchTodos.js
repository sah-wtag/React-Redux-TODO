import { loaded } from "../actions";
import BASE_URL from "../../../utils/apiConfig";

const fetchTodos = async (dispatch) => {
  const response = await fetch(`${BASE_URL}/todos`);
  const todos = await response.json();
  dispatch(loaded(todos));
};

export default fetchTodos;
