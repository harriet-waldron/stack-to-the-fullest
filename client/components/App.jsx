import React from 'react'
import { Route } from 'react-router-dom'


//import { fetchPlanets } from '../actions'

import Header from './Header'
import MaoriStars from './MaoriStars'
import MaoriStarMyth from './MaoriStarMyth'

function App () {
 
  return (
    <>
      <div className='app'>
  
      <Route path='/' component={Header} />
      <Route path='/' component={MaoriStars} />
      <Route path='/:constname' component={MaoriStarMyth} />
      </div>
    </>
  )
}

export default App
