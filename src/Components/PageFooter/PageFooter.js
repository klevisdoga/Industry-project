import React from 'react'
import './PageFooter.scss'
import logo from '../../Assets/Images/cg-brand-logo.webp'


export default function PageFooter() {
  return (
    <footer className='footer'>
      <img className='footer__image' src={logo} alt='cg-logo' />
      <span className='footer__copyright'>Copyright &copy; 2022 Canada Goose Inc. </span>
    </footer>
  )
}
