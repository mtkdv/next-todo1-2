import { atom, selector } from "recoil";
import { StatusValues, TodoItem } from "../types";

export const todoItemState = atom<TodoItem | undefined>({
  key: "todoItemState",
  default: undefined,
});

export const todoListState = atom<TodoItem[] | []>({
  key: "todoListState",
  default: [],
});

// export const statusFilterState = atom<StatusValues>({
export const statusFilterState = atom({
  key: "statusFilterState",
  default: "all",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(statusFilterState);

    if (filter === "all") return todoList;

    return todoList.filter((todo) => todo.status === filter);
  },
});
