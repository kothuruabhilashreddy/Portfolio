import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.JPG'
import HeaderSocials from './headersocials';
function header() {
  return (
    <header>
      <div className="container header__container" id="header">
        <h1>Kothuru Abhilash Reddy</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='screen'>
          <div className='welcome'>Hello & Welcome!</div>
          <div className='me'>
            <img src={ME} alt="me" />
          </div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
   
  )
}

export default header