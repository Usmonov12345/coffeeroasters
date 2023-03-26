import React from 'react'
import {Link} from 'react-router-dom'
import './Onecom.scss'
function Onecom() {
  return (
    <div className='Onecom'>
        <div className="container">
            <div className="box">
                <h1 className='box__title'>
                    Great coffee  <br />
                    made simple.
                </h1>
                <p className="box__text">
                    Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                </p>
                <Link to="/Create" className='box__btn'>
                    Create your plan
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Onecom