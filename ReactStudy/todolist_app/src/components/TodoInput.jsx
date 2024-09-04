import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/TodoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const dispatch = useDispatch();
  const todoRef = useRef();

  const writeBtn = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        text: todoRef.current.value,
        complete: false,
      })
    );
    // console.log(todo);
  };

  return (
    <div className="todo-inputbox">
      <input
        type="text"
        className="todo-inputbox-input"
        placeholder="할 일을 입력하세요~!"
        ref={todoRef}
      />
      <input
        type="button"
        className="todo-inputbox-add-btn"
        onClick={writeBtn}
        value="등록"
      />
    </div>
  );
};

export default TodoInput;
