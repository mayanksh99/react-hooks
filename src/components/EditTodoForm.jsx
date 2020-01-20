import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";
import { DispatchContext } from "./../contexts/todosContest";

function EditTodoForm({ id, task, toggleEditTodo }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  console.log("Edit Form");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", newTask: value, id: id });
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
