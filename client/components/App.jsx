import React, { useEffect } from 'react'
import { connect } from 'react-redux'

//import { fetchPlanets } from '../actions'

import Header from 'Header'
import Maori from 'Maori'

function App () {
 
  return (
    <>
      <div className='app'>
        <Header />
{/* if id maori <Maori /> */}

        <ul>
          <Maori />
        </ul>
      </div>
    </>
  )
}

