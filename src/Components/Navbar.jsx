import React from 'react'
import "../css/NavBar.css"

const Navbar = () => {
    return (
        <>
            <div className='display-bar'>
                <h1 style={{marginTop:10}}>Todo</h1>
                <button >Add</button>
                <button >Logout</button>
            </div>
        </>
    )
}

export default Navbar