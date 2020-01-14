import React, { createContext, useContext } from "react";
import useTodoState from "../hooks/useTodoState";

const initialTodos = [
  { id: 1, task: "Go To Gym", completed: true },
  { id: 2, task: "Breakfast", completed: false },
  { id: 3, task: "Coding", completed: false }
];
export const TodosContext = createContext();

export default function TodosProvider(props) {
  const todosStuff = useTodoState(initialTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
