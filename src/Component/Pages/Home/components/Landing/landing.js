import React,{useState} from 'react'
import img1 from "../../../../images/1.jpg"
import img2 from "../../../../images/2.jpg"
import img3 from "../../../../images/3.jpg"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
let upButton=document.getElementsByClassName('up');
console.log(upButton)
function Landing() {
  const [count ,setCount]=useState(1);

  const nextFunc =()=>{
    setCount(prev=>prev+1)
  }
  const prevFunc=()=>{
    setCount(prev=>prev-1)
  }
  return (
    
    <div className='landing contain d-flex flex-wrap justify-content-between align-items-center'>
        <div className=' desc col-xs-12 col-md-4'>
            <FontAwesomeIcon icon={faRunning} className='run'/>
            <h2>Brcelle GYM</h2>
            <FontAwesomeIcon icon={faTrophy} className='run'/>
            <p className='text-black-50 lh-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate error pariatur eos fuga deserunt, optio eum minus perspiciatis, quam aliquam amet quos nobis? Quaerat recusandae id doloribus consectetur nemo!</p>
        </div>
        <div className='slider col-12 col-md-7'>
            <div className='img w-100'>
             {count==1?(<img src={img1} className='img-fluid'/>):(null)}
             {count==2?(<img src={img2} className='img-fluid'/>):(null)}
             {count==3?(<img src={img3} className='img-fluid'/>):(null)}
            </div>
            <div className='tools d-flex justify-content-around'>
              <FontAwesomeIcon icon={faChevronLeft} onClick={count>1?(prevFunc):null} className={`${count==1?"finish btn-slide":"btn-slide"}`} />
              <div className='circles'>
                <span className={`${count==1?"active":""}`} > </span>
                <span className={`${count==2?"active":""}`}> </span>
                <span className={`${count==3?"active":""}`}> </span>
              </div>
              <FontAwesomeIcon icon={faChevronRight} onClick={count<3?(nextFunc):null} className={`${count==3?"finish btn-slide" :"btn-slide"} `}/>
              
            </div>
        </div>
        
        <FontAwesomeIcon icon={faChevronDown} className='col-12 mt-5 down'/>

    </div>
  )
}

export default Landing