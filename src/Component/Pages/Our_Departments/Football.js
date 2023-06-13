import React, { useState } from 'react'
import fo1 from '../../images/fo1.jpg'
import fo2 from '../../images/fo2.jpg'
import fo3 from '../../images/fo3.jpg'
import fo4 from '../../images/fo4.jpg'
import fo5 from '../../images/fo5.jpg'
import fo6 from '../../images/fo6.jpg'
import Footer from '../Home/components/Footer/Footer'
import Header from '../Home/components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Authentication/Auth'
function Football() {
  const [count ,setCount]=useState(1);
  setTimeout(()=>{
    setCount(count+1)
  },2000)
  const auth=useAuth();
  const navigate =useNavigate()
  return (
    <>
      <Header />
      <div className='contain foot'>
        <div className='heading col-12'>
            <h2>FootBall-department</h2>
        </div>
        <div className='land col-12 d-flex flex-wrap justify-content-between align-items-center'>
          <div className='descr col-12 col-md-6'>
            <h3>FootBall Department</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate error pariatur eos fuga deserunt, optio eum minus perspiciatis, quam aliquam amet quos nobis? Quaerat recusandae id doloribus consectetur nemo!</p>
          </div>
          <div className='image d-none d-md-block col-6'>
            <img src={fo1} className='img-fluid'/>
          </div>
        </div>
        <div className='slider-body'>
          <div className='images-bdy'>
              {count==1?(<img src={fo2}/>):(null)}
              {count==2?(<img src={fo3}/>):(null)}
              {count==3?(<img src={fo4}/>):(null)}
              {count==4?(<img src={fo5}/>):(null)}
              {count==5?(<img src={fo6}/>):(null)}
              {count==6?(setCount(1)):(null)}


          </div>
        </div>
        <div className='circles' >
          <span className={`${count==1?"active":""}`}></span>
          <span className={`${count==2?"active":""}`}></span>
          <span className={`${count==3?"active":""}`}></span>
          <span className={`${count==4?"active":""}`}></span>
          <span className={`${count==5?"active":""}`}></span>


        </div>
        <div className='price'>
          <p>Subscribe for 1 month , only 10 $</p>
          <button >Go To subscribe</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Football