import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import uuid from "uuid/v4";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Go To Gym", completed: true },
    { id: 2, task: "Breakfast", completed: false },
    { id: 3, task: "Coding", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = addTodoText => {
    setTodos([...todos, { id: uuid(), task: addTodoText, completed: false }]);
  };

  const removeTodo = todoId => {
    const updatedTodo = todos.filter(todo => todo.id !== todoId);
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
          <TodoList todos={todos} removeTodo={removeTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
