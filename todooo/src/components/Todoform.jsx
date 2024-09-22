import React from 'react'
import { usetodo } from '../contexts/Todocontext'
import { useState } from 'react'
// import ÷

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addtodo}=usetodo()

const clicked=(e)=>{
    e.preventDefault()
    addtodo({ todo:todo, completed: false})
    console.log(todo);
    
    setTodo("")

}
    return (
        <form   className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={clicked} >
                Add
            </button>
        </form>
    );
}

export default TodoForm;


