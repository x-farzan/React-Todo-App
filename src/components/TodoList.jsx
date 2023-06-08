import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const { todoListReducer } = useSelector((state) => state);
  const { todoList } = todoListReducer;
  return (
    <div className={classes.div1}>
      {todoList.map((item, index) => (
        <div className={classes.div2}>
          <Card key={index} item={item.todo} />
          <div className={classes.editIcon}>
            <button>EDIT</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
