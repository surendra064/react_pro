import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider, usetodo } from './contexts/Todocontext'
import TodoForm from './components/Todoform'
import TodoItem from './components/Todoitem'

function App() {
  const [todos, settodos] = useState([])
const addtodo=(todo)=>{
  if(todo.todo){
    console.log(todo);
   settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

}
const updatetodo=(id,todo)=>{
  settodos((prev)=>prev.map((ptodo)=>(ptodo.id===id?todo:ptodo )))

}
const deletetodo=(id)=>{
  settodos((prev)=>prev.filter((ptodo)=>(ptodo.id!=id )))

}
const toggletodo=(id)=>{
  settodos((prev)=>prev.map((ptodo)=>(ptodo.id===id?{ ...ptodo, 
    completed: !ptodo.completed } :ptodo)))
}

useEffect(()=>{const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    settodos(todos)}},[])

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
},[todos])

  return (
    <Todoprovider value={{todos, addtodo, updatetodo, deletetodo, toggletodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                    {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                    </div>
                    ))}
                </div>
            </div>
        </div>

    </Todoprovider>
  )
}

export default App
