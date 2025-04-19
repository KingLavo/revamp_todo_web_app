import Home from "./pages/Home" 
import Header from "./pages/Header"
import TodoFormInput from "./components/TodoFormInput";  

function App() {    
  return (
    <div className="App">   
      <div className="header_container">
       
          <div className="container">
            <Header/>
            <div className="todo-form">
              <TodoFormInput/>
            </div>
          </div> 
          <div className="container todo_body_container" > 
            <Home/>
          </div>
      </div> 
    </div>
  )
}

export default App;
