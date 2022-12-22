import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
      <div className='hero'>

        <img className='photo-grid' src="https://shorttermrentalz.com/wp-content/uploads/2020/06/airbnb-virtual1.png" alt="" />

        <div className='hero-header'>
          <h1 className='hero-title'>Online Expriences</h1>
          <p className='hero-subtitle'>
            Join unique interative activities led by one-of-a-kind hosts - all without leaving home.
          </p>
        </div>
        
      </div>
    )
}

export default Hero;