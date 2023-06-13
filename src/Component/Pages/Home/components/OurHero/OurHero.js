import React, { Children, useState } from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import hero1 from "../../../../images/hero1.jpg"
import hero2 from "../../../../images/hero2.jpg"
import hero3 from "../../../../images/hero3.jpg"
import hero4 from "../../../../images/hero4.jpg"
import hero5 from "../../../../images/hero5.jpg"
import hero6 from "../../../../images/hero6.jpg"
function OurHero() {
    const [veiw,setVeiw]=useState(false);
    // const [content, setContent] = useState(false);
    function handle (event){
        const currentItem = event.target;
        const nextItems = currentItem.nextElementSibling
        console.log(nextItems.className);
        setVeiw(!veiw) 
        veiw ? nextItems.classList.add("d-block") : nextItems.classList.remove("d-block"); 
        
    }
  return (
    <div className='ourhero contain'>
        <div className='heading col-12'>
            <h2>Our-Hero</h2>
        </div>
        <div className='cards d-flex gap-lg-1 flex-wrap justify-content-between align-items-center align-content-center'>
            <div  className='mycard col-12 col-md-5 col-lg-3'>
                <img src={hero1} className='img-fluid w-100'/>
                <div className='name' >
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <h4>Lokman Drywsy</h4>
                </div>
                <button onClick={handle} value="less">{(veiw && 'more') || 'less'}</button>
                <div className='labels' >
                    <div className='label'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                        <p>21/3/2019</p>    
                    </div >
                    <div className={`label`} >
                        <FontAwesomeIcon icon={faTrophy} className='icon'/>
                        <p>Champion of the Syrian Arab Republic</p>
                    </div>
                </div>
                
            </div>
            <div  className='mycard col-12 col-md-5 col-lg-3'>
                <img src={hero2} className='img-fluid w-100'/>
                <div className='name' >
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <h4>Lokman Drywsy</h4>
                </div>
                <button onClick={handle} value="less">{(veiw && 'more') || 'less'}</button>
                <div className='labels' >
                    <div className='label'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                        <p>21/3/2019</p>    
                    </div >
                    <div className={`label`} >
                        <FontAwesomeIcon icon={faTrophy} className='icon'/>
                        <p>Champion of the Syrian Arab Republic</p>
                    </div>
                </div>
                
            </div>
            <div  className='mycard col-12 col-md-5 col-lg-3'>
                <img src={hero3} className='img-fluid w-100'/>
                <div className='name' >
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <h4>Lokman Drywsy</h4>
                </div>
                <button onClick={handle} value="less">{(veiw && 'more') || 'less'}</button>

                <div className='labels' >
                    <div className='label'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                        <p>21/3/2019</p>    
                    </div >
                    <div className={`label`} >
                        <FontAwesomeIcon icon={faTrophy} className='icon'/>
                        <p>Champion of the Syrian Arab Republic</p>
                    </div>
                </div>
                
            </div>
            <div  className='mycard col-12 col-md-5 col-lg-3'>  
                <img src={hero4} className='img-fluid w-100'/>
                <div className='name' >
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <h4>Lokman Drywsy</h4>
                </div>
                <button onClick={handle} value="less">{(veiw && 'more') || 'less'}</button>



                <div className='labels' >
                    <div className='label'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                        <p>21/3/2019</p>    
                    </div >
                    <div className={`label`} >
                        <FontAwesomeIcon icon={faTrophy} className='icon'/>
                        <p>Champion of the Syrian Arab Republic</p>
                    </div>
                </div>
                
            </div>
            <div  className='mycard col-12 col-md-5 col-lg-3'>
                <img src={hero5} className='img-fluid w-100'/>
                <div className='name' >
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <h4>Lokman Drywsy</h4>
                </div>
                <button onClick={handle} value="less">{(veiw && 'more') || 'less'}</button>



                <div className='labels' >
                    <div className='label'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                        <p>21/3/2019</p>    
                    </div >
                    <div className={`label`} >
                        <FontAwesomeIcon icon={faTrophy} className='icon'/>
                        <p>Champion of the Syrian Arab Republic</p>
                    </div>
                </div>
                
            </div>
            <div  className='mycard col-12 col-md-5 col-lg-3'>
                <img src={hero6} className='img-fluid w-100'/>
                <div className='name' >
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <h4>Lokman Drywsy</h4>
                </div>
                <button onClick={handle} value="less">{(veiw && 'more') || 'less'}</button>



                <div className='labels' >
                    <div className='label'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                        <p>21/3/2019</p>    
                    </div >
                    <div className={`label`} >
                        <FontAwesomeIcon icon={faTrophy} className='icon'/>
                        <p>Champion of the Syrian Arab Republic</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default OurHero