import { PUSH } from "../actions/types";

const initialState = {
  todoList: [],
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return {
        ...state,
        todoList: [...state.todoList],
      };
  }
};

export default todoListReducer;
