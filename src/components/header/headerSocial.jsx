import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
            <a href='https://www.linkedin.com/in/hager-ramadan-27a919201/' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com/hageramadan' target="_blank"><BsGithub /></a>
            <a href='mailto:hagerramadan440@gmail.com' target="_blank"><FiDribbble /></a>
            
    </div>
  )
}

export default HeaderSocial