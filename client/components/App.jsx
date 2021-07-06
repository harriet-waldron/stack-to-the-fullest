import React from 'react'


//import { fetchPlanets } from '../actions'

import Header from './Header'
import MaoriStars from './MaoriStars'

function App () {
 
  return (
    <>
      <div className='app'>
        <Header />
        <ul>
          <MaoriStars />
        </ul>
      </div>
    </>
  )
}

export default App
