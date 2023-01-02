import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.JPG'
import HeaderSocials from './headersocials';
function header() {
  return (
    <header>
      <div className="container header__container" id="header">
        <h5>Hello I'm</h5>
        <h1>Kothuru Abhilash Reddy</h1>
        <h5 className="text-light">Pega Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
   
  )
}

export default header