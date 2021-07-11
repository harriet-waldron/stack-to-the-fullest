import React from 'react'
import { Route } from 'react-router-dom'


//import { fetchPlanets } from '../actions'

import Header from './Header'
import MaoriStars from './MaoriStars'
import MaoriStarMyth from './MaoriStarMyth'
import AddStory from './AddStory'
import D3Prac from './D3Prac'
// import UserStory from './UserStory'
import Nav from './Nav'
import Register from './Register'
import SignIn from './SignIn'

function App () {
 
  return (
    <>
      <div className='app'>
      <Route path='/' component={Nav} />

      <D3Prac />

      <Route path='/' component={Header} />
      <Route exact path='/' component={MaoriStars} />
      <Route exact path='/' component={AddStory} />
      <Route path='/register' component={Register} />
      <Route path='/signin' component={SignIn} />
      <Route path='/:constname' component={MaoriStarMyth} />
      {/* <Route path='/:newstory' component={UserStory} /> */}
      
      
      
      </div>
    </>
  )
}
// import Register from './Register'
// import SignIn from './SignIn'
//  <Route path='/register' component={Register} />
{/* <Route path='/signin' component={SignIn} /> */}

export default App
