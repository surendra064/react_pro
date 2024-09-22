import { useContext,createContext } from "react";


export const Todocontext=createContext({
    todos:[{
        id:1,
        todo:"some msg",
        completed:false
    }],
    addtodo:(todo)=>{},
    deletetodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    toggletodo:(id)=>{}

})

export const usetodo=()=>useContext(Todocontext);
export const Todoprovider=Todocontext.Provider;
