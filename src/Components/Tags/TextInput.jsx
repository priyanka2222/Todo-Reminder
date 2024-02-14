import React from 'react'
import "../../css/AddTodo.css";

const TextInput = (props) => {
  return (
    <>
      <div className="label-container">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} name={props.name} onChange={props.onChange} value={props.value} />
      </div>
    </>
  )
}



const AuthInput = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} onChange={props.onChange} value={props.value} />
    </>
  )
}

export { TextInput, AuthInput }