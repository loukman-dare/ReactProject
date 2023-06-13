import React from 'react'
import Header from '../Home/components/Header/Header'
import Footer from '../Home/components/Footer/Footer'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:'',
        rePassword:""
      });
    
      const handleInputChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSignUp = event => {
        event.preventDefault();
        axios.post('/l', formData)
          .then(response => console.log(FormData))
          .catch(error => console.error(error));
      };
  return (
    <>
    <Header />
    <div className='signup contain col-8 '>
        <div className='heading col-12'>
            <h2>Sign Up</h2>
        </div>
        <form  className='col-12'>
            <div className="input d-flex flex-wrap  justify-content-between " >
                <label className='col-12 col-md-7 text-start'>Your name</label>
                <input className='col-12 col-md-5' type='text' placeholder='input your name' value={formData.name}  onChange={handleInputChange} name='name' />
            </div>
            <div className="input d-flex flex-wrap justify-content-between" >
                <label className='col-12 col-md-7 text-start'>Your email</label>
                <input className='col-12 col-md-5' type='email' placeholder='input your Email' value={formData.email}  onChange={handleInputChange} name='email'/>
            </div>
            <div className="input d-flex flex-wrap justify-content-between" >
                <label className='col-12 col-md-7 text-start'>Your password</label>
                <input className='col-12 col-md-5' type='password' placeholder='input your password ' value={formData.password} onChange={handleInputChange} name='password' />
            </div>
            <div className="input d-flex flex-wrap justify-content-between" >
                <label className='col-12 col-md-7 text-start' >Reinput Your password</label>
                <input className='col-12 col-md-5' type='password' placeholder='Reinput your password' value={formData.rePassword} onChange={handleInputChange} name='rePassword'/>
            </div>
            <p>do you have account?<span onClick={()=>navigate("/login")}>Login</span></p>
            <button onClick={handleSignUp}>Sign Up</button>
        </form>
    </div>
    <Footer />

</>
  )
}

export default SignUp