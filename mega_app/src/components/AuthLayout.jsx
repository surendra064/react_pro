import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({children, authentication = true}) {

    const authStatus=useSelector((state)=>state.auth.status);
    const [loader,SetLoader]=useState(true);
    const navigate=useNavigate();
    useEffect(()=>{
        if(authentication&& authStatus!==authentication)
        {
            navigate('/login');
        }
        else if(!authentication && authStatus !== authentication)
        {
            navigate("/")

        }
    },[authStatus,navigate,authentication])




  return loader ? <h1>Loading...</h1> : <>{children}</>
  
}

// export default AuthLayout
