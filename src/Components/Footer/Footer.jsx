import React from 'react'
import imgLogo from '../../IMG/iLogo.svg'
import {Link} from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Footer/Footer.scss'
function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="foot">
            <Link to="/">
              <img src={imgLogo} alt="" />
            </Link>
            
              <ul className="foot__list">
                <li className="foot__item">
                  <Link to="/" className='foot__item__link'>
                    HOME
                  </Link>
                </li>
                <li className="foot__item">
                  <Link to="About" className='foot__item__link'>
                      ABOUT US     
                  </Link>
                </li>
                <li className="foot__item">
                  <Link to="/Create" className='foot__item__link'>
                         CREATE YOUR PLAN
                  </Link>
                </li>
              </ul>
              
              
              <ul className="foot__iconsList">
                <li className="foot__iconsItem">
                  <Link to="/">
                    <i class="foot__iconsItem__icon">
                      <FacebookIcon/>
                    </i>
                  </Link>
                </li>
                <li className="foot__iconsItem">
                  <Link to="/">
                      <i class="  foot__iconsItem__icon" ><TwitterIcon/></i>
                      
                  </Link>
                </li>
                <li className="foot__iconsItem">
                  <Link to="/">
                    <i class="foot__iconsItem__icon">
                      <InstagramIcon/>
                    </i>
                  </Link>
                </li>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer