import "../App.css";
import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const taskobj = useSelector((state) => state.todos.data);
  const taskItems = taskobj.map((task) => {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          <TodoItem task={task} key={task.id} />
        </ul>
      </div>
    )
  });

  return <div>{taskItems}</div>;
};

export default TodoList;
