import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../redux/actions/types";
import Card from "./Card";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const { todoListReducer } = useSelector((state) => state);
  const { todoList } = todoListReducer;
  const [editTodo, setEditTodo] = useState(false);
  const [todoPayload, setTodoPayload] = useState();
  const dispatch = new useDispatch();

  const handleDelete = (item) => {
    dispatch({ type: DELETE, payload: item });
  };

  const deleteTodo = (item) => {
    // setTodo(item);
    handleDelete(item);
  };

  return (
    <div className={classes.div1}>
      {todoList.map((item, index) => (
        <div className={classes.div2} key={index}>
          {editTodo && todoPayload === item.todo ? (
            <input />
          ) : (
            <Card item={item.todo} />
          )}
          {editTodo && todoPayload === item.todo ? (
            <div className={classes.editIcon}>
              <button
                onClick={() => {
                  console.log(`pressed ------ `, item.todo);
                  deleteTodo(item.todo);
                }}
              >
                UPDATE
              </button>
            </div>
          ) : (
            <div>
              <div className={classes.editIcon}>
                <button
                  onClick={() => {
                    console.log(`pressed ------ `, item.todo);
                    deleteTodo(item.todo);
                  }}
                >
                  DELETE
                </button>
              </div>
              <div className={classes.editIcon}>
                <button
                  onClick={() => {
                    setEditTodo(true);
                    setTodoPayload(item.todo);
                  }}
                >
                  EDIT
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
