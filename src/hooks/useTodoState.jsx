import { useState } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: addTodoText => {
      setTodos([...todos, { id: uuid(), task: addTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      const updatedTodo = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodo);
    },
    toggleTodo: todoId => {
      const updatedTodo = todos.map(todo =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
    },
    editTodo: (todoId, newValue) => {
      const updatedTodo = todos.map(todo =>
        todoId === todo.id ? { ...todo, task: newValue } : todo
      );
      setTodos(updatedTodo);
    }
  };
};
