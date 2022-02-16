import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState, getItemAtom } from "../recoil";
export default function TodoDetail() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const getItem = useRecoilState(getItemAtom)[0];
  const [inputEdit, setInputEdit] = useState(getItem.text);
  const [isEdit, setIsEdit] = useState(false);
  const update = () => {
    setIsEdit(!isEdit);
    // todoList[index] = {id:1, text: inputEdit};
    setTodoList(todoList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((list) => list.id !== getItem.id);
    setTodoList(newList);
  };
  console.log(getItem);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ width: "30px" }}>{getItem.id}</div>
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
        <div style={{ width: "200px" }}>{getItem.text}</div>
      )}
      <div style={{ marginRight: "20px" }}>{getItem.time}</div>
      <button onClick={deleteItem}>X</button>
      <button onClick={update}>{isEdit ? "Update" : "Edit"}</button>
    </div>
  );
}
