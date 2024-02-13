import React from 'react';
import "../css/Navbar.css"

function Navbar(props) {
  return (
    <>
      <div className='display-bar'>
          <h1>{props.title}</h1>
          <button className='display-button'>{props.button}</button>
          <button className='display-button'>Logout</button>
        </div>
    </>
  )
}

export default Navbar
