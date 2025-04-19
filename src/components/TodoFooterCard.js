import { useSelector } from "react-redux" 
import MiddleFooter from "../utilities/MiddleFooter" 

const TodoFooterCard = ({ handleTabs })=>{  

    let { todos  } = useSelector( state => state.todo)
         
    return(
        <div className="todo_footer_card">   
            <div>
                <p> {todos.length > 0 ? `${ todos.length} items left` : "No todos, add todos"}</p>
            </div>

            <MiddleFooter handleTabs={ handleTabs }/>
            
            <div className="right-footer ">
                <button  >Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoFooterCard