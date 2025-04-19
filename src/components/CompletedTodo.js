import { useSelector } from 'react-redux' 
import { useCreateTodo } from '../hooks/useCreateTodo' 

const CompletedTodo = () => { 
  
    const { completedTodo } = useSelector( state => state.todo) 
    
    //custome hook
    const { handleDelete, handleToggle } = useCreateTodo()
    
  return (
    <div className='all_todos'> 
        { 
            completedTodo && completedTodo.map((item )=>(
                 <div className="output_container" key={ item.id}>
                   <div className="left">
                      <input type="checkbox"  checked={item.isCompleted}  onChange={()=> handleToggle(item.id)} className='checkbox' />  
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

export default CompletedTodo
