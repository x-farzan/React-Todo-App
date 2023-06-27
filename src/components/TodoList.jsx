import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, EDIT } from "../redux/actions/types";
import Card from "./Card";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const { todoListReducer } = useSelector((state) => state);
  const { todoList } = todoListReducer;
  const [editTodo, setEditTodo] = useState(false);
  const [todoPayload, setTodoPayload] = useState();
  const [onChangeTodo, setOnChangeTodo] = useState("");
  const dispatch = new useDispatch();

  const handleDelete = (item) => {
    dispatch({ type: DELETE, payload: item });
  };

  const deleteTodo = (item) => {
    // setTodo(item);
    handleDelete(item);
  };

  const handleUpdate = (item, index) => {
    console.log(`item ------ `, item);
    dispatch({ type: EDIT, payload: { item, index } });
  };

  const updateTodo = (item, index) => {
    // setTodo(item);
    handleUpdate(item, index);
  };

  const onChange = (e) => {
    setOnChangeTodo(e.target.value);
  };

  return (
    <div className={classes.div1}>
      {todoList.map((item, index) => (
        <div className={classes.div2} key={index}>
          {editTodo && todoPayload === item.todo ? (
            <input type="text" placeholder={item.todo} onChange={onChange} />
          ) : (
            <Card item={item.todo} />
          )}
          {editTodo && todoPayload === item.todo ? (
            <div className={classes.editIcon}>
              <button
                onClick={() => {
                  console.log(`onChangeTodo ----`, onChangeTodo);
                  updateTodo(onChangeTodo, index);
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
