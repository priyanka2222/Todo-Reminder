import React from 'react'
import "../css/NavBar.css"
import { useLocation } from 'react-router'
import {useNavigate} from "react-router-dom"
const Navbar = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const addTodo = () => {
        navigate("/addTodo")
    }
    const goBack = () => {
        window.history.back();
    }
    const logout = ()=>{
        localStorage.removeItem("userName");
        navigate("/")
    }
    return (
        <>
            <div className={location.pathname === "/home" ? 'display-bar' : 'display-bar-home'}>
                <h1 style={{ marginTop: 10 }}>{props.title}</h1>
                <button 
                onClick={
                    location.pathname === "/home" ? 
                    addTodo : goBack
                }>{props.btn1}</button>
                <button onClick={logout}>{props.btn2}</button>
            </div>
        </>
    )
}

export default Navbar