import React, { useState } from "react";
import { Addtodos } from "../apis/api";
import { TodoType } from "../apis/constans";

// Props interface for Todosinput component
type TodoInputProps = {
  onAddHandel: (todo: TodoType) => void; // Function to handle adding todos
};

// Component for inputting new todos
const Todosinput = (props: TodoInputProps) => {
  const { onAddHandel } = props;

  // State variables for input values: title and age
  const [inputValues, setInputValues] = useState({ title: "", age: 0 });

  // Event handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update input values based on the input name
    setInputValues((prevState) => ({
      ...prevState,
      [name]: name === "age" ? parseInt(value) || 0 : value, // Parse age input value to integer, defaulting to 0 if invalid
    }));
  };

  // Event handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, age } = inputValues;
    // Add todo using input values
    const newTodo = await Addtodos(title, age, false);
    if (newTodo) {
      // Call the onAddHandel function with the new todo data if it was successfully added
      onAddHandel(newTodo);
      setInputValues({
        title: "",
        age: 0
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for title */}
      <input
        type="text"
        name="title"
        value={inputValues.title}
        onChange={handleChange}
        placeholder="Title"
      />
      {/* Input for age */}
      <input
        type="number"
        name="age"
        value={inputValues.age}
        onChange={handleChange}
        placeholder="Age"
      />
      {/* Submit button */}
      <button type="submit">Add todo</button>
    </form>
  );
};

export default Todosinput;
