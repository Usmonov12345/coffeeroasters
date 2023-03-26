import React from 'react'
import About from './About/About'
import {Route,Routes} from 'react-router-dom'
import Home from './Home/Home'
import Create from './Create/Create'
function Main() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/About' element={<About/>} />
        <Route path='/Create' element={<Create/>} />
      </Routes>
    </div>
  )
}

export default Main