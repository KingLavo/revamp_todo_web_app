import React, { useState, useEffect } from 'react' 
import { useSelector } from "react-redux"  
import { BiCircle } from 'react-icons/bi'
import { useCreateTodo } from "../hooks/useCreateTodo" 

//component to add todo
const TodoFormInput = () => {

  const [ text, setText ] = useState("")
  const [ error, setError ] = useState("")
  //getting the values from the todo slice
  const { todos } = useSelector( state => state.todo)   

  //custome hook to submite/create a todo
  const {handleSubmit}  = useCreateTodo( text, setError, setText )
   
  
  //save todo to local storage
  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify( todos )) 
  },[todos]) 

  return (
    <form onSubmit={handleSubmit}>
      <BiCircle className='icon' size='25px'  />
      <input 
        type="text"
        placeholder='create a new todo'
        value={ text }
        onChange={ e => setText(e.target.value)}
        />
        <p>{ error }</p>
    </form> 
  )
}

export default TodoFormInput
