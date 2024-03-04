import { useEffect, useState } from 'react'
import Navbar from "../../Components/Navbar";
import searchIcon from '../../Images/search-icon.png';
import Card from '../../Components/Card';
import "../../css/DisplayTodo.css"


const DisplayTodos = () => {

  const [todo, setTodo] = useState([])
  const [userName, setUserName] = useState("")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  useEffect(() => {
    setUserName(localStorage.getItem("userName"))
    localStorage.getItem("todos") !== null ? setTodo(JSON.parse(localStorage.getItem("todos"))) : setTodo([])
  }, [])

  const filetedValue = todo.filter((val) => {
    if (search == "") return val;
    if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val.title;
    }
    if (val.priority.toLowerCase().includes(search.toLowerCase())) {
      return val.priority;
    }
  });

  if (sort === "HighToLow") {
    filetedValue.sort((a, b) => {
      const priorityOrder = { 'Low': 2, 'Medium': 1, 'High': 0 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  } else if (sort === "LowToHigh") {
    filetedValue.sort((a, b) => {
      const priorityOrder = { 'Low': 0, 'Medium': 1, 'High': 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }



  return (
    <>
      <Navbar title={`Welcome ${userName}`} btn1={"Add"} btn2={"Logout"} />
      <div className='display-search-sort'>
        <div className='display-search-section'>
          <input
            type='text'
            className='display-search-bar'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img className='display-search-icon' src={searchIcon} />
        </div>
        <div>

          <span style={{ fontSize: '20px' }}></span>
          <span>
            <select
              name='Sort'
              id='sort'
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value=''>Select Prority</option>
              <option value='HighToLow'>High to Low</option>
              <option value='LowToHigh'>Low to High</option>
            </select>
          </span>
        </div>
      </div>
      <div className="display-todocard">
        {
          filetedValue.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              priority={value.priority}
              snooze={value.snooze}
              startDateTime={value.startDateTime}
              endDateTime={value.endDateTime}
            />
          ))
        }
      </div>

    </>
  )
}

export default DisplayTodos