import React from 'react'
import {Link} from 'react-router-dom'
import './Four.scss'

function Four() {
  return (
    <div className='Four'>
        <div className="container">
            <div className="card">
                <h3 className='card__title'>
                    How it works
                </h3>
                <div className="card__box">
                    <ul className="card__box__list">
                        <span className='card__box__span'></span>
                        <li className="card__box__item1">
                        
                        </li>
                        
                         <li className="card__box__item2">
                        
                        </li>

                         <li className="card__box__item3">
                        
                        </li>
                    </ul>
                </div>
                
                <ul className="card__list">
                
                    <li className="card__item">
                        <h2 className="card__item__title">
                            01
                        </h2>
                        <p className="card__item__text1">
                            Pick your <br />
                            coffee
                        </p>
                        <p className="card__item__text2">
                            Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
                        </p>
                    </li>
                    
                
                    <li className="card__item">
                        <h2 className="card__item__title">
                            02
                        </h2>
                        <p className="card__item__text1">
                            Choose the frequency
                        </p>
                        <p className="card__item__text2">
                            Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
                        </p>
                    </li>
                    
                
                    <li className="card__item">
                        <h2 className="card__item__title">
                            03
                        </h2>
                        <p className="card__item__text1">
                            Receive and enjoy!
                        </p>
                        <p className="card__item__text2">
                            Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
                        </p>
                    </li>
                </ul>   
                <Link to="/Create" className='card__link' >Create your plan</Link>
                </div>
        </div>
    </div>
  )
}

export default Four