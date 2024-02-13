import React from 'react'
import "../css/AddTodo.css";

const Selector = (props) => {
  return (
    <>
      <div className="label-container">
        <label htmlFor={props.name}>{props.label}</label>
        <select name={props.name} onChange={props.onChange} value={props.value}>
        <option value="">{props.defaultValue}</option>
          {
            props.optionArr.map((val) => {
              return (
                <option key={val} value={val}>{val}</option>
              )
            })
          }
        </select>
      </div>
    </>
  )
}

export default Selector