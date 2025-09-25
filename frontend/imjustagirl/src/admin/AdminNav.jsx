import React, {useState} from 'react'
import logo from '/icons/logo.png'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
    const navigate = useNavigate();

    const handleLogout=()=>{
        navigate('/Home');
    }
    return (

    <div>

        <nav className="navbar ">
            <div className="container-fluid">
                <div>
                    <Link to='/Admin'> 
                    <img className='logo' src={logo}/>
                    </Link>
                </div>
                <h1 className="navbar-brand mb-0 h1">I'm Just A Girl🎀</h1>
                <button className="logout-btn" onClick={handleLogout}> Logout </button>
            </div>
        </nav>
        
    </div>
  )
}
export default AdminNav