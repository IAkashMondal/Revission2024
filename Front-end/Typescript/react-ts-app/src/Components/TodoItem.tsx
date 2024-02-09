import React from "react";
import { TodoType } from "../apis/constans";

const TodoItem = (props: TodoType) => {
    const handelUpdate =async ()=>{

    }
    const handelDelete =()=>{
        
    }
  return (
    <div>
      <h2>{` ${props.titel} ${props.age} ${props.status}`}</h2>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
