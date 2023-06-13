import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import coach1 from "../../../../images/coach1.jpg"
import coach2 from "../../../../images/coach2.jpg"
import coach3 from "../../../../images/coach3.jpg"

import { faUser,faPhone, faVoicemail, faMailForward, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function OurCoahes() {
    const navigate = useNavigate()
  return (
    <div className='ourcoaches'>
        <div className='heading'>
            <h2>Our-Coaches</h2>
        </div>
        <div className='cards d-flex flex-wrap justify-content-between contain ' >
            <div className='mycard col-12 col-md-5 col-lg-3'>
                    <img src={coach1}/>
                    <div className='label' >
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <h4>Loukman drywsy</h4>
                    </div>
                    <div className='label' >
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                        <p>0992437921</p>
                    </div >
                    <div className='label'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                        <p>loukman@gmail.com</p>
                    </div>
                    <button  onClick={()=>navigate("/loukman")}>Subscribe</button>
            </div>
            <div className='mycard col-12 col-md-5 col-lg-3'>
                    <img src={coach2}/>
                    <div className='label' >
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <h4>sofia dabbal</h4>
                    </div>
                    <div className='label' >
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                        <p>0909097871</p>
                    </div >
                    <div className='label'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                        <p>sofias@gmail.com</p>
                    </div>
                    <button className='rounded-bill' onClick={()=>{navigate("/sofia")}}>Subscribe</button>

            </div>
            <div className='mycard col-12 col-md-5 col-lg-3'>
                    <img src={coach3}/>
                    <div className='label' >
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <h4>ahmed dabbal</h4>
                    </div>
                    <div className='label' >
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                        <p>09944432122</p>
                    </div >
                    <div className='label'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                        <p>ahmed12@gmail.com</p>
                    </div>
                    <button className='rounded-bill' onClick={()=>navigate("/ahmed")}>Subscribe</button>

            </div>
        </div>
    </div>
  )
}

export default OurCoahes