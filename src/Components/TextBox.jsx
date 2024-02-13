import React from 'react'
import "../css/AddTodo.css";

const TextBox = (props) => {
    return (
        <>
            <div className="label-container">
            <label htmlFor={props.name}>{props.label}</label>
                <textarea type="text" name={props.name} rows={props.row} cols={props.cols} onChange={props.onChange} value={props.value}></textarea>
            </div>
        </>
    )
}

export default TextBox