import { atom, selector } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: JSON.parse(localStorage.getItem("localStorageRecoil")) ?? [],
});
const getIdItemAtom = atom({
  key: "getIdItemAtom",
  default: null,
});
const getTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const list = get(todoListState);
    localStorage.setItem("localStorageRecoil", JSON.stringify(list));
    return list;
  },
});

export { todoListState, getIdItemAtom, getTodoListState };
