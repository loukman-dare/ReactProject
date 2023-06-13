import React from 'react'
import Header from '../Home/components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../Authentication/Auth'
import axios from 'axios'
import Footer from '../Home/components/Footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Login() {
  const location =useLocation()
  const Auth = useAuth()
  const navigate = useNavigate()
  const [user,setUser]=useState("")
  const redirect=location.state?.path || '/'

  const handleLogin=()=>{
    Auth.login(user);
    navigate(redirect,{replace:true})
  }
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const handleInputChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setUser(event.target.value)
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        axios.post('/l', formData)
          .then(response => console.log(FormData))
          .catch(error => console.error(error));
      };
  return (
    <>
        <Header />
        <div className='login contain'>
            <div className='heading col-12'>
                <h2>Log In</h2>
            </div>
            <form onSubmit={handleSubmit} className='col-12'>
                <div className="input d-flex flex-wrap justify-content-between col-12 " >
                    <label className='col-10 col-md-7 text-start ' >Your email</label>
                    <input className='col-10 col-md-4 ' type='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='input your Email' />
                </div>
                <div className="input d-flex flex-wrap justify-content-between" >
                    <label className='col-10 col-md-8 text-start' >Your password</label>
                    <input className='col-10 col-md-4' type='password' name='password' onChange={handleInputChange} value={formData.password} placeholder='input your password ' />
                </div>
                <p className='mt-5'>dont have account?<span onClick={()=>navigate('/signup')}>SignUp</span></p>
                <button onClick={handleLogin}>Log in</button>
        </form>
    </div>
    <Footer />

    </>
  )
}

export default Login
