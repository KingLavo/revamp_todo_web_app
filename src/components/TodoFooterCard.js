import { useSelector } from "react-redux" 
import MiddleFooter from "../utilities/MiddleFooter"  
import { useCreateTodo } from "../hooks/useCreateTodo"


const TodoFooterCard = ({ handleTabs })=>{  

    let { todos } = useSelector( state => state.todo)
    //custom hook
    const { handleClearCompleted } = useCreateTodo()
      

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