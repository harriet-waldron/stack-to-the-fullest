import React from 'react'
import { Route } from 'react-router-dom'


//import { fetchPlanets } from '../actions'

import Header from './Header'
import AddStory from './AddStory'
import UserStory from './UserStory'
import D3Prac from './D3Prac'
import MaoriStars from './MaoriStars'
import MaoriStarMyth from './MaoriStarMyth'
import Nav from './Nav'
import Register from './Register'
import SignIn from './SignIn'

function App () {
 
  return (
    <>
      <div className='app'>
      <Nav />

      <D3Prac />
      <Header />
      
      {/* <Route exact path='/userstories/add' component={AddStory} /> */}
      <Route exact path='/userstories' component={AddStory} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/' component={MaoriStars} />
      <Route path='/constellation/:id' component={MaoriStarMyth} />
      
      </div>
    </>
  )
}
// import Register from './Register'
// import SignIn from './SignIn'
//  <Route path='/register' component={Register} />
{/* <Route path='/signin' component={SignIn} /> */}

export default App
