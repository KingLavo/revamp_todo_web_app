import React from 'react'
import sun_icon from "../assest/icon-sun.svg"
import moon_icon from "../assest/icon-moon.svg"
import useToggleMode from '../hooks/useToggleMode'

const Header = () => {

  const handleToggle = useToggleMode(moon_icon, sun_icon)

  return (
    <div className='header'>
        <h1>todo</h1>
        <button
          id='dark_mode_toggle' 
          onClick={ handleToggle }
        >
          <img src={moon_icon} alt="toggle-icon" id="toggle_icon"/>
        </button>
    </div>
  )
}

export default Header
