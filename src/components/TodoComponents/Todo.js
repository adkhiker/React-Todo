import React from "react";

const Todo = props => {
  let style;
  if (props.todo.completed === true) {
    style = {
      textDecoration: "line-through",
      background: "#59C9A5"
    };
  } else {
    style = {
      textDecoration: "none",
      background: "#D81E5B"
    };
  }
  return (
    <div
      onClick={() => props.toggleTask(props.todo.id)}
      className="todo"
      style={style}
    >
      <h2>{props.todo.task}</h2>
    </div>
  );
};

export default Todo;
