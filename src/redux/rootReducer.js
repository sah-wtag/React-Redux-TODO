import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todoReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filers: filterReducer,
});

export default rootReducer;
