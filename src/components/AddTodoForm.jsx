import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PUSH } from "../redux/actions/types";
import classes from "./AddTodoForm.module.css";

const AddTodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({ type: PUSH, payload: { todo } });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    setTodo("");
  };

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={classes.todoForm}>
        <input
          className={classes.input}
          type="text"
          value={todo}
          placeholder="Add todo"
          onChange={onChange}
        ></input>
        <button type="submit" className={classes.button}>
          <p className={classes.p}>Add todo</p>
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
