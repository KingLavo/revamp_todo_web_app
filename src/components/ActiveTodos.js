import React from 'react' 
import { useSelector, useDispatch } from "react-redux"  
import {  toggleTodo , deleteTodo } from "../reduxToolKit/features/todoSlice"   



const ActiveTodo = () => { 
      //todoSlice
    let { activeTodos } = useSelector(state => state.todo)  
      //dispatch
     const dispatch = useDispatch()

    

  return (
    <div className='all_todos'>  
      {
        activeTodos &&  activeTodos.map((item )=>(
          <div className="output_container" key={ item.id}>
            <div className="left">
               <input type="checkbox"  checked={item.isCompleted}  onChange={()=> dispatch(toggleTodo(item.id))} className='checkbox' />  
               <span className={ item.isCompleted ? "text-deco" : ""}>{item.text}</span>
            </div>
            <div >
              { 
                  item.isCompleted 
                &&
                  <span 
                    className="delete" 
                    onClick={ ()=>dispatch(deleteTodo(item.id))}>
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

export default ActiveTodo
