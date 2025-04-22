 import { useDispatch } from "react-redux"
import { createTodo ,toggleCompleted, deleteCompleted,   
            toggleTodo, deleteTodo, filterActiveTodos, 
            clearCompletedTodo,  todosClearCompleted 
        } from "../reduxToolKit/features/todoSlice"
//uuid for id set up
import { v4 as uuidv4 } from "uuid"

//custom hook to create a todo/handle Delete/toggle a todo
export const useCreateTodo = ( text, setError, setText  )=>{ 

    const dispatch = useDispatch()
    //create a todo handler 
    const handleSubmit = ( e)=>{  

        //prevent form default reload
        e.preventDefault()
        //stop event bobbling
        e.stopPropagation() 

        if(text ===""){ 
            setError("please add a todo")
            return 
        } 
    
        if( parseInt(text)){ 
            setError("numbers are not allowed as a todo")
            return
        }
        if(text.length <= 3){
            setError("Todo must be more than 3 characters")
            return
        } 

        dispatch(createTodo({ text, id:uuidv4(), isCompleted: false  } )) 
        
        setError("")
        setText("")
    };

    //handleDelete todo for both todos and completedTodo
    const handleDelete = (id)=>{ 
        dispatch(deleteTodo(id))
        dispatch(deleteCompleted(id))
    }
    //handle toggle
    const handleToggle = (id)=>{ 
        dispatch(toggleTodo(id))
        dispatch(toggleCompleted(id))
    }
        //handleActive tabs
     const handleActiveTodos = ()=>{ 
          dispatch(filterActiveTodos())  
    }
    //clear completed todo with a single butto click( completed )
    const handleClearCompleted = ()=>{
        dispatch(clearCompletedTodo())
        dispatch( todosClearCompleted()) 
    } 
    

    return {handleSubmit, handleDelete, handleToggle, handleActiveTodos, handleClearCompleted }
}