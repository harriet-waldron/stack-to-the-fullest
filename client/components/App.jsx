import React from 'react'
import { Route } from 'react-router-dom'


//import { fetchPlanets } from '../actions'

import Header from './Header'
import MaoriStars from './MaoriStars'
import MaoriStarMyth from './MaoriStarMyth'
import AddStory from './AddStory'

function App () {
 
  return (
    <>
      <div className='app'>
  
      <Route path='/' component={Header} />
      <Route path='/' component={MaoriStars} />
      <Route path='/:constname' component={MaoriStarMyth} />

      <AddStory />
      </div>
    </>
  )
}
// import Register from './Register'
// import SignIn from './SignIn'
//  <Route path='/register' component={Register} />
{/* <Route path='/signin' component={SignIn} /> */}

export default App
