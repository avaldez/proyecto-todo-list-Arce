import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
const {lista,setLista}= props
  
    return (
        <div>
            <ul>
           
           {lista.map((item)=> <li>{item.tarea}</li>)}              
           
            </ul>
        </div>
    )
}

export default TodoList;