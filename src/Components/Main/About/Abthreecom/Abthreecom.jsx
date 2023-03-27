import React from 'react'
import './Abthreecom.scss'
import img0 from '../../../../IMG/abtthree1.svg'
import img1 from '../../../../IMG/abthree.svg'
import img2 from '../../../../IMG/abthree3.svg'
function Abthreecom() {
  return (
    <div className='Abthreecom'>
      <div className="container">
        <div className="card">
          <div className="card__left">
              <h3 className="card__left__title">
                Uncompromising quality
              </h3>
              <p className="card__left__text">
                Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
          </div>
          
          <div className="card__reght">
            <img src={img0} alt=""  className='card__reght__img1'/>
            <img src={img1} alt="" className='card__reght__img2'  />
            <img src={img2} alt="" className='card__reght__img3'  />
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default Abthreecom