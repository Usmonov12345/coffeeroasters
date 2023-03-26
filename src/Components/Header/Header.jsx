import React from 'react'
import '../Header/Header.scss'
import logo from '../../IMG/log.svg'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='Header'>
        <div className="container">
            <div className="navbar">
                <Link to="/" className='navbar__linkLogo'>
                    <img src={logo} alt="" className='navbar__linkLogo__logoImg' />
                </Link>
                
                <ul className="navbar__list">
                    <li className="navbar__item" >
                            <Link to="/" className='navbar__item__link'>
                                 HOME
                            </Link>
                    </li>
                    <li className="navbar__item">
                            <Link to="/Abaut" className='navbar__item__link'>
                                ABOUT US
                            </Link>
                    </li>
                    <li className="navbar__item">
                            <Link to="/Create" className='navbar__item__link'>
                                CREATE YOUR PLAN
                            </Link>
                    </li>
                </ul>
                
                <i class="fa fa-list navbar__bur"></i>
            </div>
        </div>
    </div>
  )
}

export default Header