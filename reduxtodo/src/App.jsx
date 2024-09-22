import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'
import { useSelector
  
 } from 'react-redux'
function App() {
  const [count, setCount] = useState(0)
  const todos=useSelector(state => state.todos);

  return (
    <>
    <AddTodo/>
    {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todos todo={todo} />
                    </div>
                    ))}
      
    </>
  )
}

export default App
