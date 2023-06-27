import { PUSH, DELETE, EDIT } from "../actions/types";

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
      const filteredList = state.todoList.filter((todo) => {
        return todo.todo !== action.payload;
      });
      return {
        ...state,
        todoList: filteredList,
      };
    case EDIT:
      const updatedList = state.todoList.map((todo, index) => {
        console.log(`todo ----- `, todo);
        console.log(`index ----- `, index);
        console.log(`action.payload ------ `, action.payload);
        if (index === action.payload.index) {
          console.log(`index ------ `, index);
          console.log(`action.payload ------ `, action.payload);
          return { ...todo, todo: action.payload.item };
        }
      });
      return {
        ...state,
        todoList: updatedList,
      };
    default:
      return {
        ...state,
        todoList: [...state.todoList],
      };
  }
};

export default todoListReducer;
