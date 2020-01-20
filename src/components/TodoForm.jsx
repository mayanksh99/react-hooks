import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";
import { TodosContext } from "./../contexts/todosContest";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label="Add New Todo"
          margin="normal"
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
