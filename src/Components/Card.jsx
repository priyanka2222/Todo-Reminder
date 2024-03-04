import React from 'react';
import '../css/Card.css'

const Card = (props) => {
  return (
    <>
        <div className="card-container">
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-description'>{props.description}</p>
        <div className="card-time-section">
            <div>
                <div>Prority : <span>{props.priority}</span></div>
            </div>
            <div>
                <div>Snooze : <span>{props.snooze}</span></div>
            </div>
        </div>
        <div className="card-time-section">
            <div>
                <div>Start Time : <span>{props.startDateTime}</span></div>
            </div>
            <div>
                <div>End Time : <span>{props.endDateTime}</span></div>
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

export default Card