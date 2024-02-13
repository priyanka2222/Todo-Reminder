import { useState } from 'react';
import "../../css/AddTodo.css";
import Navbar from '../../Components/Navbar';
import TextBox from '../../Components/TextBox';
import TextInput from '../../Components/TextInput';
import Selector from '../../Components/Selector';

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

  const onSubmit = (e) => {
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

  const priorityArr = ["Low", "Medium", "High"]
  const snoozeArray = ["+1 times", "+2 times", "+3 times", "+4 times", "+5 times"]

  return (
    <>
      <Navbar />
      <form className="row">

        <TextInput name={"title"} type={"text"} onChange={onChangeHandler} value={todo.title} label={"Title"} />

        <TextBox label={"Description"} rows={3} cols={6} onChange={onChangeHandler} value={todo.description} name={"description"} />

        <Selector name={"priority"} label={"Priority"} value={todo.priority} onChange={onChangeHandler} optionArr={priorityArr} defaultValue={"Select Priority"} />

        <TextInput type={"datetime-local"} name={"startDateTime"} onChange={onChangeHandler} value={todo.startDateTime} label={"Start Date and Time"} />

        <TextInput type={"datetime-local"} name={"endDateTime"} onChange={onChangeHandler} value={todo.endDateTime} label={"End Date and Time"} />

        <Selector name={"snooze"} label={"Set Snooze"} value={todo.snooze} onChange={onChangeHandler} optionArr={snoozeArray} defaultValue={"Select Snooze"} />

        <button onClick={onSubmit}>Submit</button>
      </form>
    </>
  );
}

export default AddTodo;
