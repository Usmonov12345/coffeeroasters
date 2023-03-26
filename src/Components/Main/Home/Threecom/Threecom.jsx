import React from 'react'
import './Threecom.scss'
import img1 from '../../../../IMG/cof.svg'
import img2 from '../../../../IMG/sov.svg'
import img3 from '../../../../IMG/maw.svg'
function Threecom() {
  return (
    <div className='Threecom'>
        <div className="container">
            <div className="box">
                <h3 className="box__title">
                    Why choose us?
                </h3>
                <p className="box__text">
                    A large part of our role is choosing which particular coffees will be featured 
                    in our range. This means working closely with the best coffee growers to give 
                    you a more impactful experience on every level.
                </p>
                <ul className="box__list">
                
                    <li className="box__item">
                            <div className="box__item__left">
                             <img src={img1} alt="" className='box__item__img'/>
                            </div>
                            <div className="box__item__right">
                                <h4 className='box__item__title'>
                                Best quality
                                </h4>
                                <p className="box__item__text">
                                    Discover an endless variety of the world’s best artisan coffee from each of our roasters.
                                </p>
                            </div>
                    </li>
                    
                    <li className="box__item">
                            <div className="box__item__left">
                             <img src={img2} alt="" className='box__item__img'/>
                            </div>
                            <div className="box__item__right">
                                <h4 className='box__item__title'>
                                Best quality
                                </h4>
                                <p className="box__item__text">
                                    Discover an endless variety of the world’s best artisan coffee from each of our roasters.
                                </p>
                            </div>
                    </li>
                    
                    <li className="box__item">
                            <div className="box__item__left">
                             <img src={img3} alt="" className='box__item__img'/>
                            </div>
                            <div className="box__item__right">
                                <h4 className='box__item__title'>
                                Best quality
                                </h4>
                                <p className="box__item__text">
                                    Discover an endless variety of the world’s best artisan coffee from each of our roasters.
                                </p>
                            </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Threecom