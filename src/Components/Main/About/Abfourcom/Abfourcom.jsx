import React from 'react'
import './Abfourcom.scss'
import { Link } from 'react-router-dom'
import img1 from '../../../../IMG/im1.svg'
import img2 from '../../../../IMG/im2.svg'
import img3 from '../../../../IMG/im3.svg'
function Abfourcom() {
  return (
    <div className='Abfourcom'>
        <div className="container">
            <div className="card">
                <h2 className='card__title'>Our headquarters</h2>
                <ul className="card__list">
                    <li className="card__item">
                        <img src={img1} alt="" className='card__item__img' />
                        <h3 className="card__item__title">
                            United Kingdom
                        
                        </h3>
                        <p className="card__item__text">
                            68  Asfordby Rd
                        </p>
                        <p className="card__item__text">
                            Alcaston
                        </p>
                        <p className="card__item__text">
                            SY6 1YA
                        </p>
                        <Link to="tel:+44 1241 918425" className="card__item__link">
                            +44 1241 918425
                        </Link>
                    </li>
                                 
                    <li className="card__item">
                        <img src={img2} alt="" className='card__item__img' />
                        <h3 className="card__item__title">
                            United Kingdom
                        
                        </h3>
                        <p className="card__item__text">
                            68  Asfordby Rd
                        </p>
                        <p className="card__item__text">
                            Alcaston
                        </p>
                        <p className="card__item__text">
                            SY6 1YA
                        </p>
                        <Link to="tel:+44 1241 918425" className="card__item__link">
                            +44 1241 918425
                        </Link>
                    </li>
                                 
                    <li className="card__item">
                        <img src={img3} alt="" className='card__item__img' />
                        <h3 className="card__item__title">
                            United Kingdom
                        
                        </h3>
                        <p className="card__item__text">
                            68  Asfordby Rd
                        </p>
                        <p className="card__item__text">
                            Alcaston
                        </p>
                        <p className="card__item__text">
                            SY6 1YA
                        </p>
                        <Link to="tel:+44 1241 918425" className="card__item__link">
                            +44 1241 918425
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Abfourcom