import { PUSH, DELETE } from "../actions/types";

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
    case DELETE:
      state.todoList = state.todoList.filter((todo) => {
        console.log(`todo ----- `, todo);
        console.log(`action.payload ----- `, action.payload);
        return todo !== action.payload;
      });
      console.log(`checking ----- `, state.todoList);
      return {
        ...state,
        todoList: state.todoList,
      };
    default:
      return {
        ...state,
        todoList: [...state.todoList],
      };
  }
};

export default todoListReducer;
