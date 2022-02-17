import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState, getItemAtom } from "../recoil";
import moment from "moment";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
export default function TodoDetail() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const getItem = useRecoilValue(getItemAtom);
  const [inputEdit, setInputEdit] = useState(todoList[getItem].text);
  const [isEdit, setIsEdit] = useState(false);
  // const index = todoList.findIndex((listItem) => listItem === getItem);
  console.log(getItem);

  const update = ({ target: { value } }) => {
    setIsEdit(!isEdit);
    const newList = replaceItemAtIndex(todoList, getItem, {
      ...todoList[getItem],
      text: inputEdit,
      time: moment().format("hh:mm:ss - DD/MM/YYYY"),
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((list) => list.id !== getItem);
    setTodoList(newList);
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
      <div style={{ width: "30px" }}>{getItem}</div>
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
        <div style={{ width: "200px" }}>{todoList[getItem].text}</div>
      )}
      <div style={{ marginRight: "20px" }}>{todoList[getItem].time}</div>
      <button onClick={deleteItem}>X</button>
      <button onClick={update}>{isEdit ? "Update" : "Edit"}</button>
    </div>
  );
}
