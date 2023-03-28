import React from 'react'
import '../Header/Header.scss'
import logo from '../../IMG/log.svg'
import {Link,NavLink} from 'react-router-dom'
import { useState } from 'react'
import logg from '../../IMG/iLogo.svg'
import { Button } from '@mui/material'
function Header() {

         const [btnState, setBtnState] = useState(false)
    
         let List = () => {
            setBtnState(  btnState => !btnState)
         }
         
         let toggleClassChek =  btnState ? 'actives' : null;

  return (
    <div className='Header'>
        <div className="container">
        
                <div className={`acol ${toggleClassChek}`}>
                    <Link to="/">
                        <img src={logg} alt="" className='actives__logo' />
                            
                    </Link>
                    
                    
                     <Button variant="text" className='actives__btn'>
                   <Link to="/"  className='actives__link'>
                      HOME
                    </Link>
                    </Button> <Button variant="text" className='actives__btn'>
                    <Link to="/About" className='actives__link'>
                        ABOUT US
                    </Link>
                    </Button>
                    <Button variant="text" className='actives__btn'>
                    <Link to="/Create" className='actives__link'>
                         CREATE YOUR PLAN
                    </Link>
                    </Button>
                  
                </div>
            
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
                            <Link to="/About" className='navbar__item__link'>
                                ABOUT US
                            </Link>
                    </li>
                    <li className="navbar__item">
                            <Link to="/Create" className='navbar__item__link'>
                                CREATE YOUR PLAN
                            </Link>
                    </li>
                </ul>
                <Button onClick={() => List()} className="navbar__bur">
                    <i class="fa fa-list navbar__bur" ></i>
                </Button>
                
            </div>
        </div>
    </div>
  )
}

export default Header