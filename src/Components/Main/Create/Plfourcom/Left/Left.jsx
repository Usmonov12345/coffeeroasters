import React from 'react'
import './Left.scss'
import {NavLink} from 'react-router-dom'
function Left() {
  return (
    <div className='Left'>
        <ul className="list">
            <li className="list__item">
            <NavLink  to="#Caef" className='list__link'>01 Preferences</NavLink>
            </li>
            <li className="list__item">
            <NavLink  to="#Ollo" className='list__link'>02 Bean Type</NavLink>
            </li>
            <li className="list__item">
            <NavLink  to="/" className='list__link'> 03 Quantity</NavLink>
            </li>
            <li className="list__item">
            <NavLink  to="/" className='list__link'> 04 Grind Option</NavLink>
            </li>
            <li className="list__item">
            <NavLink  to="/" className='list__link'>05 Deliveries</NavLink>
            </li>
        </ul>
    </div>
  )
}
    
export default Left