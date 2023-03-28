import React from 'react'
import './Caef.scss'
function Caef() {
  return (
    <div className='Caef' id='Caef'>
        <h2 className="Caef__title">
            How do you drink your coffee? <i class="fa fa-chevron-up Caef__icon"></i>
        </h2>
        <ul className="list">
            <li className="list__item">
                <h3 className="list__item__title">
                    Capsule
                </h3>
                
                <p className="list__item__text">
                    Compatible with Nespresso systems and similar brewers
                </p>
            </li>
             <li className="list__item1">
                <h3 className="list__item__title">
                   Filter
                </h3>
                
                <p className="list__item__text">
                    For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
            </li>
             <li className="list__item">
                <h3 className="list__item__title">
                    Espresso
                </h3>
                
                <p className="list__item__text">
                    Dense and finely ground beans for an intense, flavorful experience
                </p>
            </li>
        </ul>
    </div>
  )
}

export default Caef