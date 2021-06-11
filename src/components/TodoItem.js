import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  }

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input ref={textRef} type='text' defaultValue={task.task} />
        <button className="complete-btn" type='submt'><i class="fa fa-check"></i></button>
      </form>
    );
  };
  const renderItem = () => {
    return (
      <>
        {task.task}
        <button className="edit-btn" onClick={() => setIsUpdate(true)}><i class="fas fa-edit"></i></button>
        <button className="trash-btn" onClick={() => dispatch(deleteTodo(task.id))}><i class="fa fa-trash"></i></button>
      </>
    );
  };

  return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

export default TodoItem;
