import React from 'react'
import '../../css/TodoCard.css'

function TodoCard(data) {
  console.log("TodoCard : ", data)
  return (
    <>
      <div className="card-container">
        <h2 className='card-title'>{data.title}</h2>
        <p className='card-description'>{data.description}</p>
        <div className="card-time-section">
            <div>
                <div>Prority : <span>{data.priority}</span></div>
            </div>
            <div>
                <div>Snooze : <span>{data.snooze}</span></div>
            </div>
        </div>
        <div className="card-time-section">
            <div>
                <div>Start Time : <span>{data.startDateTime}</span></div>
            </div>
            <div>
                <div>End Time : <span>{data.endDateTime}</span></div>
            </div>
        </div> 
        <div className="card-button-section">
            <button className='card-button'>Snooze</button>
            <button className='card-button'>Edit</button>
            <button className='card-button'>Delete</button>
        </div>
      </div>
    </>
  )
}

export default TodoCard;
