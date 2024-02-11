import React from "react";
import { TodoType } from "../apis/constans";
import { UpdateTodos, DeleteTodos } from "../apis/api";

interface TodoInputProps extends TodoType {
  handelOnUpdate: (todo: TodoType) => void; // Function to handle adding todos
}
const TodoItem = (props: TodoInputProps) => {
  const { handelOnUpdate } = props;

  const handelUpdate = async () => {
    const updated = await UpdateTodos({
      ...props,
      status: !props.status,
    });
    if (updated) {
      handelOnUpdate(updated);
    } else {
      console.error("Failed to update todo.");
    }
  };

  const handelDelete = async () => {
    const deleted = await DeleteTodos(props);
    if (deleted) {
      console.log("Todo deleted successfully:", deleted);
      // Trigger a re-fetch of todos after successful deletion
    } else {
      console.error("Failed to delete todo.");
    }
  };

  return (
    <div>
      <h2>{` ${props.titel} ${props.age}`}</h2>
      <button onClick={handelUpdate}>{props.status ? "true" : "false"}</button>
      <button onClick={handelDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
