import React, { useState } from 'react'
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'
import f4 from '../../images/f4.jpg'
import f5 from '../../images/f5.jpg'
import f6 from '../../images/f6.jpg'
import Footer from '../Home/components/Footer/Footer'
import Header from '../Home/components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Authentication/Auth'
function Fitness() {
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
            <h2>Fitness-department</h2>
        </div>
        <div className='land col-12 d-flex flex-wrap justify-content-between align-items-center'>
          <div className='descr col-12 col-md-6'>
            <h3>Fitness Department</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate error pariatur eos fuga deserunt, optio eum minus perspiciatis, quam aliquam amet quos nobis? Quaerat recusandae id doloribus consectetur nemo!</p>
          </div>
          <div className='image d-none d-md-block col-6'>
            <img src={f1} className='img-fluid' />
          </div>
        </div>
        <div className='slider-body col-11 m-auto'>
          <div className='images-bdy'>
              {count==1?(<img src={f2}/>):(null)}
              {count==2?(<img src={f3}/>):(null)}
              {count==3?(<img src={f4}/>):(null)}
              {count==4?(<img src={f5}/>):(null)}
              {count==5?(<img src={f6}/>):(null)}
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

export default Fitness