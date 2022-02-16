import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil";
import moment from "moment";

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function AddItem() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        time: moment().format("hh:mm:ss - DD/MM/YYYY"),
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input type="text" value={inputValue} onChange={onChange} />
      {inputValue && <button onClick={addItem}>Add</button>}
    </div>
  );
}

export default AddItem;
