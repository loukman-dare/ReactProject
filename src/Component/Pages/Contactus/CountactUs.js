import React from 'react';
import Header from '../Home/components/Header/Header';
import Footer from '../Home/components/Footer/Footer';
import img from '../../images/Black Gold Elegant Bird Club Logo.png'
function ContactUs() {
  return (
    <>
        <Header />
        <div className='contain contact d-flex flex-wrap align-items-center'>
          <div className='heading col-12'>
            <h2>Contact Us</h2>
          </div>
          <div className='c-us col-12 col-md-6'>
              <p>You can contact us through the following channels:</p>
              <ul>
                <li>Phone: 123-456-7890</li>
                <li>Email: info@example.com</li>
                <li>Address: 123 Main St, Anytown, USA</li>
              </ul>
          </div>
          <div className='img-contact col-12 col-md-6' >
            <img src={img} className='img-fluid'/>
          </div>
        </div>
        <Footer />
    </>
  );
}
export default ContactUs;
