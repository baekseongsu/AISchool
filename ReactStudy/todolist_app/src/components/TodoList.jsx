import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ title, checked }) => {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <div className="todo-list">
      <p className="todo-list-tit">[{title} : 개]</p>
      <ul className="todo-list-ul">
        {todoList.map((data) =>
          data.complete === checked ? (
            <TodoItem key={data.id} todo={data} />
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
