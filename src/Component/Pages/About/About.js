import React from 'react'
import Header from '../Home/components/Header/Header'
import imgGym from '../../images/img_gym.webp'
import Footer from '../Home/components/Footer/Footer'
function About() {
  return (
    <>
        <Header />
        <div className='about contain d-flex flex-wrap justify-content-between align-items-center' >
            <div className='heading col-12' >
                <h2>ABOUT</h2>
            </div>
            <div class="disc col-12 text-light" >
                <h4>establishment date</h4>
                <p>In 2001, best friends Robert “Bobby” Peccia and Anthony “Tony” Baretta casually found themselves at General Fitness in College Point, visualizing and discussing ideas about gym operations, improvement strategies and the importance of providing members with a modern experience. </p>
                <p>A decade and 10,000+ members later, what was once General Fitness is now Push Fitness Club of College Point, their official first location. What was once two best friends’ vision and dreams of making the fitness industry better, is a reality. A reality defined by five modern, clean and neat gyms spread around New York City and Long Island.</p>
                <p>Throughout the last 10 years operating Push Fitness Clubs, Bobby and Tony kept their commitment intact: to provide their members with a luxury fitness experience at an affordable price.</p>

            </div>
            
            <div className='why col-12'>
                <h3>Why Brcelle</h3>
                <p>we create an environment where you can relax, go at your own pace, and do your own thing without ever having to worry about being judged.</p>
            </div>
        </div>
        
        <Footer/>
    </>
  )
}

export default About