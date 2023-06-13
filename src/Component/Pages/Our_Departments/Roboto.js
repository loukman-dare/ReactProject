import React from 'react'
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';

function Roboto() {
  return (
    <div>
        <h1 style={{ fontFamily: 'Roboto,sans-serif',border:"solid" }} className='col-9 mt-5'>مرحبًا بك في تطبيق React</h1>
        <span style={{fontSize:'1rem'}} className='mt-1'>louk</span>
    </div>
  )
}

export default Roboto