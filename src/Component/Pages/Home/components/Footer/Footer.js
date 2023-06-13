import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate=useNavigate();
  return (
    <div className='footer contain d-flex flex-wrap bg-dark text-light align-items-center'>
        <h3 className='col-12 '>Brcelle GYM</h3>
        <div className='social col-6 col-md-2 d-flex flex-column justify-content-around' >
            <p>Follow us</p>
            <a href='http://www.google.com' target='_blank'><FontAwesomeIcon icon={faTelegram} className='icon' style={{color:`#1da1f2`}}/></a>
            <a href='http://www.google.com' target='_blank' className='icon'  ><FontAwesomeIcon icon={faFacebook} style={{color:`#3b5998` ,}}/></a>
            <a href='http://www.google.com' target='_blank'><FontAwesomeIcon icon={faInstagram} className='icon' style={{color:`#833ab4`}}/></a>
            <a href='http://www.google.com' target='_blank'><FontAwesomeIcon icon={faTwitter} className='icon' style={{color:"#1da1f2"}}/></a>
            
        </div>
        <div className='adress col-6 col-md-8'>
            <p>Our adresses </p>
            <div className='adress1' >
                <p>ADRESS1-Lattakia,alsaliba,399Home,outj</p>
                <img />
            </div>
            <div className='adress2' >
                <p>ADRESS2-Lattakia,jableh,aamara,street33</p>
                <img />
            </div>
            <div className='adress3' >
                <p>ADRESS3-Lattakia,jbebat,street44k</p>
                <img />
            </div>
        </div>
        <div className='regis col-12 col-md-2 d-flex flex-column justify-content-around ' >
            <button onClick={()=>navigate("/signup")}>Sign Up</button>
            <button onClick={()=>navigate("/login")}>LogIn</button>
        </div>
    </div>
  )
}

export default Footer