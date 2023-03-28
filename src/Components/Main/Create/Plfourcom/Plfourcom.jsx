import React from 'react'
import Left from './Left/Left'
import './Plfourcom.scss'
import Right from './Right/Right'
function Plfourcom() {
  return (
    <div className='Plfourcom'>
        <div className="container">
            <div className="box">
                <div className="box__left">
                    <Left/>
                </div>
                <div className="box__right">
                    <Right/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plfourcom