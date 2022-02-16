import { atom, selector } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: JSON.parse(localStorage.getItem("localStorageRecoil")) ?? [],
});
const getItemAtom = atom({
  key: "getItemAtom",
  default: {},
});
const getTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const list = get(todoListState);
    localStorage.setItem("localStorageRecoil", JSON.stringify(list));
    return list;
  },
});

export { todoListState, getItemAtom, getTodoListState };
