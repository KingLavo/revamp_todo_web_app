import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux" 
import {  toggleTodo  } from "../reduxToolKit/features/todoSlice"   
import { useCreateTodo } from '../hooks/useCreateTodo'


const TodoCard = () => {  
    //todoSlice
    let { todos, completedTodo } = useSelector(state => state.todo)  
    //dispatch
    const dispatch = useDispatch()
    //custom hook 
    const { handleDelete } = useCreateTodo()
    //useEffect to update the todo
    useEffect(()=>{  
    }, [ todos,  dispatch, completedTodo ])  

  return (
    <div className='all_todos'> 
      {
        todos && todos.map((item )=>(
          <div className="output_container" key={ item.id}>
            <div className="left">
               <input type="checkbox"  checked={item.isCompleted}  onChange={()=> dispatch( toggleTodo(item.id))} className='checkbox' />  
               <span className={ item.isCompleted ? "text-deco" : ""}>{item.text}</span>
            </div>
            <div >
              { 
                  item.isCompleted 
                &&
                  <span 
                    className="delete" 
                    onClick={ ()=> handleDelete(item.id)}>
                     x
                  </span> 
              }
            </div>
          </div>
        ))
      }
       
    </div>
  )
}

export default TodoCard
