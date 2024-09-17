import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import UserContext from './context/usercontext'
import Usercontextprovider from './context/usercontextprovider'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
     <Login/>
     <Profile/>

    </Usercontextprovider>
  )
}

export default App
