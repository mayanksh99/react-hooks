import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/divider";
import ListItemText from "@material-ui/core/ListItemText";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
            <ListItem>
              <ListItemText>
                <li>{todo.task}</li>
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
export default TodoList;
