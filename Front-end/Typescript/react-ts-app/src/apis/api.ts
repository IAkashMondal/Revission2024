import axios, { AxiosResponse } from "axios";
import { TodoType } from "./constans";

// Function to fetch all todos from the server
export const GetTodos = async () => {
  try {
    // Fetch todos from the server
    const response: AxiosResponse<TodoType[]> = await axios.get(
      "http://localhost:8080/Todos"
    );
    // Return the data fetched from the server
    return response.data;
  } catch (error) {
    // Log any errors encountered during the fetch process
    console.error("Error fetching todos:", error);
    // Return an empty array in case of an error
    return [];
  }
};

// Function to add a new todo to the server
export const Addtodos = async (titel: string, age: number, status: boolean) => {
  try {
    // Send a POST request to add a new todo to the server
    const response: AxiosResponse<TodoType> = await axios.post(
      "http://localhost:8080/Todos",
      { titel, age, status }
    );
    // Return the newly added todo
    return response.data;
  } catch (error) {
    // Log any errors encountered during the add process
    console.error("Error adding todo:", error);
    // Return null in case of an error
    return null;
  }
};

// Function to update an existing todo on the server
export const UpdateTodos = async (updateValue: TodoType) => {
  try {
    // Send a PATCH request to update an existing todo on the server
    const response: AxiosResponse<TodoType> = await axios.patch(
      `http://localhost:8080/Todos$/{updateValue.id}`,
      { ...updateValue }
    );
    // Return the updated todo
    return response.data;
  } catch (error) {
    // Log any errors encountered during the update process
    console.error("Error updating todo:", error);
    // Return null in case of an error
    return null;
  }
};

// Function to delete a todo from the server
export const DeleteTodos = async (deleteValue: TodoType) => {
  try {
    // Send a DELETE request to delete a todo from the server
    const response: AxiosResponse<TodoType> = await axios.delete(
      `http://localhost:8080/Todos/${deleteValue.id}`
    );
    // Return the deleted todo
    return response.data;
  } catch (error) {
    // Log any errors encountered during the delete process
    console.error("Error deleting todo:", error);
    // Return null in case of an error
    return null;
  }
};
