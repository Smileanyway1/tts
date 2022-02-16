import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState, getItemAtom } from "../recoil";
import moment from "moment";
import { Link } from "react-router-dom";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [getItem, setItem] = useRecoilState(getItemAtom);
  const [inputEdit, setInputEdit] = useState(item.text);
  const [isEdit, setIsEdit] = useState(false);
  const index = todoList.findIndex((listItem) => listItem === item);

  const update = ({ target: { value } }) => {
    setIsEdit(!isEdit);
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: inputEdit,
      time: moment().format("hh:mm:ss - DD/MM/YYYY"),
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((list) => list.id !== item.id);
    setTodoList(newList);
  };

  const handleGetItem = () => {
    setItem(item);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ width: "30px" }}>{item.id}</div>
      {isEdit ? (
        <input
          type="text"
          value={inputEdit}
          onChange={(e) => {
            setInputEdit(e.target.value);
          }}
          style={{ width: "200px" }}
        />
      ) : (
        <Link
          to={item.id.toString()}
          onClick={handleGetItem}
          style={{ width: "200px", textDecoration: "none" }}
        >
          {item.text}
        </Link>
      )}
      <div style={{ marginRight: "20px" }}>{item.time}</div>
      <button onClick={deleteItem}>X</button>
      <button onClick={update}>{isEdit ? "Update" : "Edit"}</button>
    </div>
  );
};

export default TodoItem;
