import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";

function Todo() {
  const initialTodos = [
    { id: 1, task: "Go To Gym", completed: true },
    { id: 1, task: "Breakfast", completed: false },
    { id: 1, task: "Coding", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
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
      <TodoList todos={todos} />
    </Paper>
  );
}
export default Todo;
