import React from 'react';
import { NavLink } from "react-router-dom";
import "../css/Navbar.css"

function Navbar(props) {
  return (
    <>
      <div className='display-bar'>
          <h1>{props.title}</h1>
          {props.button == 'Add' ? 
            <NavLink to='/addTodo'>
                <button className='display-button'>{props.button}</button>
            </NavLink> : <>
            <NavLink to='/home'> 
                <button className='display-button'>{props.button} </button>
            </NavLink>
            </>
          } 
          <button className='display-button'>Logout</button>
        </div>
    </>
  )
}

export default Navbar
