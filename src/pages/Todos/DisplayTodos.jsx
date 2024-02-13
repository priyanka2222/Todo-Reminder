import React, { useEffect } from 'react';
import "../../css/DisplayTodos.css";
import searchIcon from '../../Images/search-icon.png';
import TodoCard from './TodoCard';
import Navbar from '../../Components/Navbar';

const DisplayTodos = () => {
  let tododata =  JSON.parse(localStorage.getItem('todos'));
  console.log("TodoData : ", tododata);;
  return (
    <>
      <div className='display-container'>
        {/* <h1>DisplayTodos</h1> */}
        <Navbar title= {'Todos'} button= {'Add'}/>
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
          {/* {tododata.map ((data) => {return <div>{data}</div>})} */}
          {tododata.map ((data) => {return <TodoCard {...data}/>})}
          
          {/* <TodoCard /> */}
        </div>
      </div>
    </>
  )
}

export default DisplayTodos