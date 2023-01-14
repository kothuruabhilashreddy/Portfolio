import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub, FaInstagram} from 'react-icons/fa';

function headersocials() {
  return (
    <div className='header header__socials'>
      <a href="https://www.linkedin.com/in/kothuru-abhilash-reddy-976649146/" target="__blank" id="social_icon"><BsLinkedin /></a>
      <a href="https://github.com/kothuruabhilashreddy" target="__blank" id="social_icon"><FaGithub /></a>
      <a href="https://www.instagram.com/abhiireddy/" target="__blank" id="social_icon"><FaInstagram /></a>
    </div>
  )
}

export default headersocials;

