import React,{ useState } from "react";

const TodoForm = (props) => {
    const [tarea, setTarea] = useState("");
    const{handleAddTask} = props;
    const handleSudmit = (element) => {
        element.preventDefault();
        console.log(tarea);
        setTarea(" ");
        };

    return (
        <div>
            <form className="todo-form" onSubmit={handleSudmit}>
                <input type="text" 
                value={tarea}
                onChange={(element) => setTarea(element.target.value)}
                />
                <button type="submit" disabled={tarea?"":"disable"}> Agregar </button>

                {/*  comentario 
                {"valor del imputex:" + tarea};
                */}

                </form>
            
        </div>
    )
}

export default TodoForm;