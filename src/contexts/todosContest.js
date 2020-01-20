import React, { createContext, useReducer } from "react";
import reducer from "../reducers/todoReducer";
// import useTodoState from "../hooks/useTodoState";

const initialTodos = [
  { id: 1, task: "Go To Gym", completed: true },
  { id: 2, task: "Breakfast", completed: false },
  { id: 3, task: "Coding", completed: false }
];

// const initialTodos = JSON.parse(window.localStorage.getItem("todos" || "[]"));

export const TodosContext = createContext();
export const DispatchContext = createContext();

export default function TodosProvider(props) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
