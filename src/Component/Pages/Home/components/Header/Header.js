import React, { useState } from 'react'
import logo from "../../../../images/Black Gold Elegant Bird Club Logo.png"
import { Link ,NavLink, useNavigate} from 'react-router-dom';
import { useAuth } from '../../../../Authentication/Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    const [isActive , setIsActive] = useState(false)
    const navigate = useNavigate()
    const auth = useAuth()
    const handleLogout = ()=>{
        auth.logout()
        navigate('/')
    }
    let nav = document.getElementsByClassName("header")
    function showNav () {
        setIsActive(!isActive);
    }
  return (
    
    <div className='contain m-auto '>
        <div className={`header p-5 d-flex gap-6 justify-content-between align-items-center`} >
            <div className='title  col-md-4'>
                <img  class='img-fluid  h-100'  src={logo}  />
            </div>
            <div className={`nav-bar  d-md-block col-md-8 ${isActive?"show":"d-none"} `}>
                <ul className='d-flex justify-content-around fs-12px fs-lg-5'>
                    <Link to="/" className='linke'>Home</Link>
                    <Link to="/about" className='linke' >About</Link>
                    { <Link to="/departments" className='linke' >Departments</Link>}
                    <Link to="/contact" className='linke' >Contact us</Link> 
                </ul>
            </div>
            <FontAwesomeIcon onClick={()=>showNav()} icon={faBars} className=' d-md-none fs-3 text-light col-1'/> 
            <div className='subs d-flex   col-md-3 '>
               {!auth.user && <button className=' ' onClick={()=>navigate("/login")}>LogIn</button>}
                {!auth.user && <button className='' onClick={()=>navigate("/signup")}>SignUP</button>}
                {auth.user && <button className='' onClick={handleLogout} >LogOut</button> }
            </div>
        </div>
    </div>
  )
}

export default Header