import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function headersocials() {
  return (
    <div className='header header__socials'>
      <a href="https://www.linkedin.com" target="__blank"><BsLinkedin /></a>
      <a href="https://www.github.com" target="__blank"><FaGithub /></a>
      <a href="https://www.linkedin.com" target="__blank">##</a>
    </div>
  )
}

export default headersocials