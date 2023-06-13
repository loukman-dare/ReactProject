import React from 'react'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loukman from '../../images/loukman.png'

import { useNavigate } from 'react-router-dom';

import { faEnvelope, faGraduationCap, faPhone, faUniversity }from '@fortawesome/free-solid-svg-icons'
function Sofia() {
    const navigate = useNavigate()
  return (
    <>
        <div className='profile contain d-flex flex-wrap col-7' >
            <div className='pers-info col-12 d-flex flex-wrap justify-content-center align-items-center'>
                <div className='img-louk col-12 col-md-4 '>
                    <img src={loukman} className='img-fluid'/>
                </div>
                <h4 className='col-12 col-md-8'>Sofia dappal</h4>
            </div>
            <div className='contact-info col-12 ' >
                <div className='Phone d-flex flex-wrap justify-content-between '>
                    <FontAwesomeIcon icon={faPhone}  className='col-12 col-md-4'/>
                    <p className='col-12 col-md-8'>0984478801</p>
                </div>
                <div className='email-info col-12 d-flex flex-wrap justify-content-between' >
                    <FontAwesomeIcon icon={faEnvelope} className='col-12 col-md-4'/>
                    <p className='col-12 col-md-8'>sofia@gmail.com</p>
                </div>
                <div className='educate-info col-12 d-flex flex-wrap justify-content-between' >
                    <FontAwesomeIcon icon={faGraduationCap} className='col-12 col-md-4' />
                    <p className='col-12 col-md-8'>sport and health</p>
                </div>
                <div className='university-info col-12 d-flex flex-wrap justify-content-between' >
                    <FontAwesomeIcon icon={faUniversity} className='col-12 col-md-4'/>
                    <p className='col-12 col-md-8'>Homs university</p>
                </div>
            </div>
            <div className='job col-12 d-flex flex-wrap justify-content-between'>
                <FontAwesomeIcon icon={faBriefcase} className='col-12 col-md-4'/>
                <p className='col-12 col-md-8'>Fitnes Coach</p>
            </div>
            <div className='buttons col-12 d-flex flex-wrap justify-content-center' >
                <button onClick={()=>navigate("/plan")} className='col-11 col-md-5'>Subscribe</button>
                <button onClick={()=>{navigate("/")}} className='col-11 col-md-5'>GO Back</button>
            </div>
        </div>
    </>
  )
}

export default Sofia