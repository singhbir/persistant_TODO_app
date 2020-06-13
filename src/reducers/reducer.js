import { combineReducers } from "redux";

const taskReducer = (
  state = JSON.parse(localStorage.getItem("items")) || [],
  action
) => {
  switch (action.type) {
    case "ADD_TASK":
      state = [...state, action.payload];
      localStorage.setItem("items", JSON.stringify(state));
      break;
    case "DELETE_TASK":
      state = state.filter((el) => state.indexOf(el) !== action.payload);
      localStorage.setItem("items", JSON.stringify(state));
      break;
    default:
      break;
  }
  return state;
};

let reducers = combineReducers({
  tasks: taskReducer,
});

export default reducers;
