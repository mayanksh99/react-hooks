import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import uuid from "uuid/v4";

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos" || "[]"));
  // const initialTodos = [
  //   { id: 1, task: "Go To Gym", completed: true },
  //   { id: 2, task: "Breakfast", completed: false },
  //   { id: 3, task: "Coding", completed: false }
  // ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = addTodoText => {
    setTodos([...todos, { id: uuid(), task: addTodoText, completed: false }]);
  };

  const removeTodo = todoId => {
    const updatedTodo = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodo);
  };

  const toggleTodo = todoId => {
    const updatedTodo = todos.map(todo =>
      todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);
  };

  const editTodo = (todoId, newValue) => {
    const updatedTodo = todos.map(todo =>
      todoId === todo.id ? { ...todo, task: newValue } : todo
    );
    setTodos(updatedTodo);
  };

  return (
    <Paper
      style={{
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={3}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
