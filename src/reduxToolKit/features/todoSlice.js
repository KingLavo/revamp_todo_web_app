import { createSlice } from "@reduxjs/toolkit"

const initialState ={
     todos:  localStorage.getItem("todo") ? JSON.parse(localStorage.getItem('todo')): [],   
     completedTodo: [],       
     activeTodos: []
 }
 //creating silice/reducers
 export const todoSlice = createSlice({
     name: "todo",
     initialState,
     reducers:{ 
         createTodo: ( state, action )=>{
             state.todos = [ action.payload,  ...state.todos]
         },
         toggleTodo: (state, action )=>{
             state.todos = state.todos.map( item =>{
                 if(item.id === action.payload){
                     return {...item, isCompleted: !item.isCompleted}
                 }
                 return item
             })
         },
         deleteTodo:( state, action )=>{ 
             state.todos = state.todos.filter( item => item.id !== action.payload)
         },
         filterIsCompleted: ( state )=>{
             state.completedTodo =  state.todos.filter( item => item.isCompleted)
         },
         filterActiveTodos: ( state )=>{
             state.activeTodos = state.todos.filter( item => item.isCompleted === false) 
         },
         getAllTodos: (state)=>{
             state.todos = state.todos.map( item =>{
                 return item
             }) 
         },
        toggleCompleted: (state, action )=>{
            state.completedTodo = state.completedTodo.map( item =>{
                if(item.id === action.payload){
                    return {...item, isCompleted: !item.isCompleted}
                }
                return item
            })
        },
        deleteCompleted:( state, action )=>{ 
            state.completedTodo = state.completedTodo.filter( item => item.id !== action.payload)
        }, 
     }
 })
 export const  {  
                    deleteTodo, createTodo, deleteCompleted,
                    toggleTodo, toggleCompleted,  getAllTodos, 
                    filterIsCompleted, filterActiveTodos

                } = todoSlice.actions;

 export default todoSlice.reducer