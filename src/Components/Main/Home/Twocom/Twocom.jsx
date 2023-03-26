import React from 'react'
import img1 from '../../../../IMG/two1.svg'
import img2 from '../../../../IMG/two2.svg'
import img3 from '../../../../IMG/two3.svg'
import img4 from '../../../../IMG/two4.svg'
import './Twocom.scss'
function Twocom() {
  return (
    <div className='Twocom'>
        <div className="container">
            <div className="card">
                <ul className="card__list">
                    <li className="card__item">
                            <div className="card__item__left">
                                <img src={img1} alt="rasm" className='card__item__img'/>
                            </div>
                            <div className="card__item__right">
                                <h3 className='card__item__title'>
                                    Gran Espresso
                                </h3>
                                <p className="card__item__text">
                                Light and flavorful blend with cocoa and black pepper for an intense experience.
                                </p>
                            </div>
                    </li>
                    
                     <li className="card__item">
                            
                            <div className="card__item__left">
                                <img src={img2} alt="rasm" className='card__item__img'/>
                            </div>
                            <div className="card__item__right">
                                <h3 className='card__item__title'>
                                    Planalto
                                </h3>
                                <p className="card__item__text">
                                    Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.
                                </p>
                            </div>
                    </li>
                     <li className="card__item">
                        <div className="card__item__left">
                            <img src={img3} alt="rasm" className='card__item__img'/>
                        </div>
                            <div className="card__item__right">
                                <h3 className='card__item__title'>
                                    Piccollo
                                </h3>
                                <p className="card__item__text">
                                        Mild and smooth blend featuring notes of toasted almond and dried cherry.
                                </p>
                            </div>
                       
                    </li>
                     <li className="card__item">
                        <div className="card__item__left">
                            <img src={img4} alt="rasm" className='card__item__img'/>
                        </div>
                            <div className="card__item__right">
                                <h3 className='card__item__title'>
                                    DancheDanche
                                </h3>
                                <p className="card__item__text">
                                Ethiopian hand-harvested blend densely packed with vibrant fruit notes.
                                </p>
                            </div>
                            
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Twocom