import React from 'react'
import Header from '../Home/components/Header/Header'
import dep1 from '../../images/dep1.jpg'
import dep2 from '../../images/dep2.jpg'
import dep3 from '../../images/dep3.jpg'
import dep4 from '../../images/img-dep4.jpg'

import Footer from '../Home/components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
function OurDepartments() {
    const navigate = useNavigate()
  return (
    <>
        <Header />
        <div className='departments contain d-flex flex-wrap justify-content-between' >
            <div className='heading col-12'><h2>Departments</h2></div>
            <div className='dep-card col-12 col-md-5' >
                <img src={dep1} className='img-dep'/>
                <h5>Building Body department</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button onClick={()=>navigate('body-buliding')}>Subscribe</button>
                
            </div>
            <div className='dep-card col-12 col-md-5' >
                <img src={dep2} className='img-dep'/>
                <h5>Boxing department</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button onClick={()=>navigate('boxing')}>Subscribe</button>

            </div>
            <div className='dep-card col-12 col-md-5' >
                <img src={dep3} className='img-dep'/>
                <h5>Fitness department</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button onClick={()=>navigate('fitness')}>Subscribe</button>

            </div>
            <div className='dep-card col-12 col-md-5' >
                <img src={dep4} className='img-dep'/>
                <h5>Football department</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button onClick={()=>navigate("football")}>Subscribe</button>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default OurDepartments