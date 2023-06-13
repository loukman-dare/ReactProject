import React, { useState } from 'react'
import s1 from '../../images/SI1.jpg'
import s2 from '../../images/SI2.jpg'
import s3 from '../../images/SI3.jpg'
import s4 from '../../images/SI4.jpg'
import s5 from '../../images/SI5.jpg'
import w from '../../images/wall.png'
import Footer from '../Home/components/Footer/Footer'
import Header from '../Home/components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Authentication/Auth'
function BudyBuilding() {
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
            <h2>Budy-Building-department</h2>
        </div>
        <div className='land col-12 d-flex flex-wrap justify-content-between align-items-center'>
          <div className='descr col-12 col-md-6'>
            <h3>Body Building Department</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate error pariatur eos fuga deserunt, optio eum minus perspiciatis, quam aliquam amet quos nobis? Quaerat recusandae id doloribus consectetur nemo!</p>
          </div>
          <div className='image d-none d-md-block col-6'>
            <img src={w} className='img-fluid'/>
          </div>
        </div>
        <div className='slider-body col-11 m-auto'>
          <div className='images-bdy '>
              {count==1?(<img src={s1}/>):(null)}
              {count==2?(<img src={s2}/>):(null)}
              {count==3?(<img src={s3}/>):(null)}
              {count==4?(<img src={s4}/>):(null)}
              {count==5?(<img src={s5}/>):(null)}
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

export default BudyBuilding