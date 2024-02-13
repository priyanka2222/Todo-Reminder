import { useState } from 'react';
import "../../css/AddTodo.css";

const AddTodo = () => {

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: "",
    startDateTime: "",
    endDateTime: "",
    snooze: ""
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value
    })
  }

const onSubmit = (e)=>{
  e.preventDefault();
  const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

  const updatedTodos = [...existingTodos, todo];
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  
  setTodo({
    title: "",
    description: "",
    priority: "",
    startDateTime: "",
    endDateTime: "",
    snooze: ""
  });
}

  return (
    <>
      <form className="row">
        <div className="label-container">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={onChangeHandler} value={todo.title} />
        </div>

        <div className="label-container">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" rows={3} cols={6} onChange={onChangeHandler} value={todo.description}></textarea>
        </div>

        <div className="label-container">
          <label htmlFor="priority">Priority</label>
          <select name="priority" onChange={onChangeHandler} value={todo.priority}>
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="label-container">
          <label htmlFor="startDateTime">Start Date and Time</label>
          <input type="datetime-local" name="startDateTime" onChange={onChangeHandler} value={todo.startDateTime} />
        </div>

        <div className="label-container">
          <label htmlFor="endDateTime">End Date and Time</label>
          <input type="datetime-local" name="endDateTime" onChange={onChangeHandler} value={todo.endDateTime} />
        </div>

        <div className="label-container">
          <label htmlFor="snooze">Set Snooze</label>
          <select name="snooze" onChange={onChangeHandler} value={todo.snooze}>
            <option value="">Select Snooze</option>
            <option value="+1 times">+1 times</option>
            <option value="+2 times">+2 times</option>
            <option value="+3 times">+3 times</option>
            <option value="+4 times">+4 times</option>
            <option value="+5 times">+5 times</option>
          </select>
        </div>

        <button onClick={onSubmit}>Submit</button>
      </form>
    </>
  );
}

export default AddTodo;
