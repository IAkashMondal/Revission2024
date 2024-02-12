import React from "react";
import { Container, Typography } from "@mui/material";
import TodoAddItems from "./TodoAddItems";
import { TodoList } from "./TodoList";
const TodoApp = () => {
  return (
    <Container className="center">
      <Typography align="center" variant="h3">
        TodoApp
      </Typography>
      <TodoAddItems />
      <TodoList />
    </Container>
  );
};

export default TodoApp;
