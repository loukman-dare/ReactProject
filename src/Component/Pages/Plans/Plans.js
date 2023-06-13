import React from 'react'
import Footer from '../Home/components/Footer/Footer'
import Header from '../Home/components/Header/Header'
import { useAuth } from '../../Authentication/Auth';
import { useNavigate } from 'react-router-dom';
function Plans() {
  const auth=useAuth();
  const navigate =useNavigate()
  const handleLogout = ()=>{
    auth.logout()
    navigate('/')
  }

  return (
   <>
        <Header/>
        <div className='contain plan col-9 col-md-6  ' >
            <h3 className='col-12'>Subscribe with Brcelle</h3>
            <div className='features text-center' >
                <p className='col-12'>Subscribe With Us for 1 month</p>
                <p className='col-12'>the Best Coaches in Syria</p>
                <p className='col-12'>Greate Food System</p>
                <p className='col-12'>you will become a Hero</p>
                <p className='col-12'>price :only 20 $ in 1 month</p>
            </div>
            <button className='col-10 col-md-5'  >Confirm</button>
        </div>
        <Footer />
   </>
  )
}

export default Plans