import React from "react";
import { useRecoilValue } from "recoil";
import AddItem from "./AddItem";
import TodoItem from "./TodoItem";
import { getTodoListState } from "../recoil";

const TodoList = () => {
  const todoList = useRecoilValue(getTodoListState);
  return (
    <>
      <AddItem />
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};

export default TodoList;
