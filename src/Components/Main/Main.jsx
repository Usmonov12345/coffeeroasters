import React from 'react'
import About from './About/About'
import {Route,Routes} from 'react-router-dom'
import Home from './Home/Home'
import Create from './Create/Create'
import Caef from './Create/Plfourcom/Right/Caef/Caef'
import Ollo from './Create/Plfourcom/Right/Ollo/Ollo'
function Main() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/About' element={<About/>} />
        <Route path='/Create' element={<Create/>} />
          <Route path="Caef" element={<Caef/>}/>
            <Route path="Ollo" element={<Ollo/>}/>
      </Routes>
    </div>
  )
}

export default Main