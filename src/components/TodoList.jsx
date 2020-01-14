import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/divider";
import Todo from "./Todo";
import { TodosContext } from "./../contexts/todosContest";

function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
              />
              {i < todos.length - 1 ? <Divider /> : ""}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
