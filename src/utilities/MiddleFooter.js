import { useCreateTodo  } from '../hooks/useCreateTodo' 

const MiddleFooter = ({ handleTabs }) => { 

    const { handleActiveTodos } = useCreateTodo()

    const handleActive = ()=>{
      handleTabs("active") 
      handleActiveTodos()
    }

  return (
    <div className="middile-footer">
        <button  onClick={()=> handleTabs("all")}> All</button>
        <button  onClick={ handleActive }> Active</button>
        <button  onClick={()=> handleTabs("completed") }> Complete</button>
    </div>
  )
}

export default MiddleFooter
