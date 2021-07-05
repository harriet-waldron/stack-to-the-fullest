import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPlanets } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchPlanets())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Planets!</h1>
        <ul>
          {props.planets.map(planet => (
            <li key={planet}>{planet}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    planets: globalState.planets
  }
}

export default connect(mapStateToProps)(App)
