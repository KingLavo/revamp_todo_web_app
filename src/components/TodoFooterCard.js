import { useSelector, useDispatch } from "react-redux" 
import MiddleFooter from "../utilities/MiddleFooter" 
import { clearCompletedTodo,  todosClearCompleted } from "../reduxToolKit/features/todoSlice"


const TodoFooterCard = ({ handleTabs })=>{  

    let { todos } = useSelector( state => state.todo)
    const dispatch = useDispatch()
    
    const handleClearCompleted = ()=>{
        dispatch(clearCompletedTodo())
        dispatch( todosClearCompleted()) 
    } 

    return(
        <div className="todo_footer_card">   
            <div>
                <p> {todos.length > 0 ? `${ todos.length} items left` : "No todos,add todos"}</p>
            </div>

            <MiddleFooter handleTabs={ handleTabs }/>
            
            <div className="right-footer ">
                <button onClick={ ()=>  handleClearCompleted()} >Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoFooterCard