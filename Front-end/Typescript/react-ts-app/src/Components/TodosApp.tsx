import React, { useEffect, useState } from "react";
import { GetTodos } from "../apis/api";
import { TodoType } from "../apis/constans";
import Todosinput from "./Todosinput";
import TodoItem from "./TodoItem";

// Component for managing todos
const TodosApp = () => {
  // State variable for storing todos
  const [todos, setTodos] = useState<TodoType[]>([]);

  // Function to handle adding a new todo
  const onAddHandel = (newTodo: TodoType) => {
    setTodos([...todos, newTodo]);
  };
    // Function to handle updating a todo
  const handelOnUpdate = (updatedTodo: TodoType) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  };
  // Fetch todos from the server on component mount
  useEffect(() => {
    GetTodos()
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div>
      <h1>TodosApp</h1>
      {/* Component for adding new todos */}
      <Todosinput onAddHandel={onAddHandel} />
      {/* Rendering todo items */}
      {todos?.map((item) => (
        <TodoItem key={item.id} {...item} handelOnUpdate={handelOnUpdate} />
      ))}
    </div>
  );
};

export default TodosApp;
