import React,{ useState } from 'react' 
import AllTodos from "../components/AllTodos"
import ActiveTodos from "../components/ActiveTodos"
import CompletedTodo from '../components/CompletedTodo' 
import { useDispatch } from 'react-redux'
import TodoFooterCard from '../components/TodoFooterCard'
import {  filterIsCompleted  } from "../reduxToolKit/features/todoSlice"  
import { useCreateTodo } from "../hooks/useCreateTodo"


const Home = () => {  
        //array of tabs
        const tabs = [ "all", "active", "completed"];
        
        const [clickedTab, setClickedTab] = useState("all")

        const { handleActiveTodos } = useCreateTodo()
        
        const dispatch = useDispatch()
        
        const handleTabs = (name ) =>{ 
          tabs.map( item =>{
              if(item === name){
                  setClickedTab(item) 
                  dispatch(filterIsCompleted())
              } 
              return item  
          })
        }

        const handleActiveTab = ()=>{
          handleActiveTodos()
          handleTabs("active")
        }
    
    
   return (
     <div className='home display'>    
        {
            clickedTab === "active"  ? <ActiveTodos /> : 
            clickedTab === "completed" ? <CompletedTodo/> : <AllTodos />
         }  
        <TodoFooterCard handleTabs={ handleTabs}  />
        <div className="middle_footer_small_screen">
          <div className="middle_footer_small_container">
          <button  onClick={()=> handleTabs("all")}> All</button>
          <button  onClick={ handleActiveTab }> Active</button>
          <button  onClick={()=> handleTabs("completed") }> Completed</button>
          </div>
        </div>
    </div>
  )
}

export default Home

   