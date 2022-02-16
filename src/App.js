import React from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import { getTodoListState } from "./recoil";

const App = () => {
  const todoList = useRecoilValue(getTodoListState);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        {todoList.map((todo) => {
          return (
            <Route
              path={todo.id.toString()}
              element={<TodoDetail />}
              key={todo.id}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
