import React from 'react';
import "../../css/DisplayTodos.css";
import searchIcon from '../../Images/search-icon.png';
import TodoCard from './TodoCard';

const DisplayTodos = () => {
  return (
    <>
      <div className='display-container'>
        {/* <h1>DisplayTodos</h1> */}
        <div className='display-bar'>
          <h1>Todo</h1>
          <button className='display-button'>Add</button>
          <button className='display-button'>Logout</button>
        </div>
        <div className='display-search-sort'>
          <div className='display-search-section'>
            <input type='text' className='display-search-bar' placeholder='Search'/>
            <img className='display-search-icon' src= {searchIcon}/>
          </div>
          <div>
            
            <span style={{fontSize:'20px'}}>Sort  : </span><span> <select name='Sort' id='sort'>
                <option value=''>Select Prority</option>
                <option value='HighToLow'>High to Low</option>
                <option value='LowToHigh'>Low to High</option>
              </select> </span>
          </div>
        </div>
        <div className='display-todocard'>
          <TodoCard/>
        </div>
      </div>
    </>
  )
}

export default DisplayTodos