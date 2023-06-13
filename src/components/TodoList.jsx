import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../redux/actions/types";
import Card from "./Card";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const { todoListReducer } = useSelector((state) => state);
  const { todoList } = todoListReducer;
  const [todo, setTodo] = useState();
  const dispatch = new useDispatch();

  const handleDelete = () => {
    dispatch({ type: DELETE, payload: { todo } });
  };

  const deleteTodo = (item) => {
    setTodo(item);
    handleDelete();
  };

  return (
    <div className={classes.div1}>
      {todoList.map((item, index) => (
        <div className={classes.div2}>
          <Card key={index} item={item.todo} />
          <div className={classes.editIcon}>
            <button
              type="button"
              onClick={() => {
                console.log(`pressed ------ `, item.todo);
                deleteTodo(item.todo);
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
