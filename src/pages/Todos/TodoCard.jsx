import React from 'react'
import '../../css/TodoCard.css'

function TodoCard() {
  return (
    <>
      <div className="card-container">
        <h2 className='card-title'>Title</h2>
        <p className='card-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <div className="card-time-edit-section">
            <div className="card-time-section">
                <div>
                    <div>Start Time : <span>14/05/2025</span></div>
                </div>
                <div>
                    <div>End Time : <span>14/05/2025</span></div>
                </div>
            </div> 
            <button className='card-button'>Snooze</button>
            <button className='card-button'>Edit</button>
            <button className='card-button'>Delete</button>
        </div>
      </div>
    </>
  )
}

export default TodoCard;
