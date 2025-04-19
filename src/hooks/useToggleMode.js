
const useToggleMode = (moon, sun ) => {
    //get mode from local storage
    let lightMode = localStorage.getItem("lightmode")

    const enableDarkmode = ()=>{
      document.body.classList.add("lightmode")
      //savre mode to local storage 
      localStorage.setItem("lightmode", "enable")
    }
  
    const disableDarkMode = ()=>{
      document.body.classList.remove("lightmode")
      localStorage.setItem("lightmode", null)
    }
  
    if(lightMode === "enable"){
      enableDarkmode()
    }
  
    const handleToggle = ()=>{ 
        lightMode = localStorage.getItem("lightmode") 
        if(lightMode !== "enable"){
            document.querySelector("#toggle_icon").setAttribute("src", sun)  
            enableDarkmode()   
        }else{
          document.querySelector("#toggle_icon").setAttribute("src", moon) 
          disableDarkMode() 
        }
    }

    return handleToggle
}

export default useToggleMode
