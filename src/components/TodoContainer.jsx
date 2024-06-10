import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {

const addtask = () => "tarea agregada"

const [lista,setLista] = useState([])

const handleAddTask=(objetoTarea) =>{
    setLista([...lista,objetoTarea])
    console.log(setLista)
}

//objetos de la lista.
//done: false,
//id: (+new Date()).toString(),
//tarea:

return (
        <div>
            <TodoForm handleAddtask={addtask}/>
            <TodoList lista={lista} setLista={setLista}/>
        </div>
    )
}

export default TodoContainer;
