import React from 'react'
import Four from '../Home/Four/Four'
import Plonecom from './Plonecom/Plonecom'
import './Create.scss'
import Pltwocom from './Pltwocom/Pltwocom'
import Plthreecom from './Plthreecom/Plthreecom'
import Plfourcom from './Plfourcom/Plfourcom'
function Create() {
  return (
    <div>
      <Plonecom/>
        <Pltwocom/>
        <Plthreecom/>
        <Plfourcom/>
    </div>
  )
}

export default Create