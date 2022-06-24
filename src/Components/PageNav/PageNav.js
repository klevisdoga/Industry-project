import React, { useState } from 'react'
import './PageNav.scss'
import cgMenu from '../../Assets/Images/goose-burgers.png'
import searchIcon from '../../Assets/Images/search-nav.svg'
import bagIcon from '../../Assets/Images/bag-nav.svg'
import { Link } from 'react-router-dom'

export default function PageNav() {
    const [menu, setMenu] = useState(false);


    const handleMenuOpen = () => {
        setMenu(true)
    }
    const handleMenuClose = () => {
        setMenu(false)
    }

    return (
        <div className='header'>
            <img onClick={handleMenuOpen} src={cgMenu} alt='dropdown menu icon' className='header__nav-menu' />
            <Link to={'/'}><img src={'https://www.canadagoose.com/on/demandware.static/Sites-CanadaGooseCA-Site/-/default/dw32f894e7/images/cg-logo-black.svg'} alt='canada goose logo' className='header__logo' /></Link>
            <nav className={`header__nav ${menu ? 'header__nav--open' : ''}`}>
                <div className='header__nav-heading'>
                    <Link onClick={handleMenuClose} to={'/'}><img src={'https://www.canadagoose.com/on/demandware.static/Sites-CanadaGooseCA-Site/-/default/dw32f894e7/images/cg-logo-black.svg'} alt='canada goose logo' className='header__logo' /></Link>
                    <span className='header__nav-heading--close' onClick={handleMenuClose}>x</span>
                </div>
                <div className='header__nav-list'>
                    <div className='header__nav-list-items'>
                        <Link to={'/our-mission'} onClick={handleMenuClose} className='header__nav-list-items--link'><h3>OUR MISSION</h3></Link>
                        <span className={`header__nav-list--arrow`}>^</span>
                    </div>
                    <div className='header__nav-list-items'>
                        <Link to={'/data-science'} onClick={handleMenuClose} className='header__nav-list-items--link'><h3>DATA</h3></Link>
                        <span className={`header__nav-list--arrow`}>^</span>
                    </div>
                    <div className='header__nav-list-items'>
                        <Link to={'/marketing'} onClick={handleMenuClose} className='header__nav-list-items--link'><h3>MARKETING</h3></Link>
                        <span className={`header__nav-list--arrow `}>^</span>
                    </div>
                    <div className='header__nav-list-items'>
                        <Link to={'/ux-ui'} onClick={handleMenuClose} className='header__nav-list-items--link'><h3>UX/UI</h3></Link>
                        <span className={`header__nav-list--arrow `}>^</span>
                    </div>
                </div>

            </nav>



            <div className='header__shop'>
                <img src={searchIcon} alt='search bar icon' className='header__shop-search' />
                <img src={bagIcon} alt='shopping bag icon' className='header__shop-bag' />
            </div>
        </div>
    )
}
