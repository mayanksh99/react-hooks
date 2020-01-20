import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";
import { TodosContext } from "./../contexts/todosContest";

function EditTodoForm({ id, task, toggleEditTodo }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditTodo();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
