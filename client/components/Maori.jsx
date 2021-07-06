// astral mythology in te ao maori
import React from 'react'

import { fetchPlanets } from '../actions'

export default function Header(props) {

  useEffect(() => {
    props.dispatch(fetchPlanets())
  }, [])


  return (
    {props.planets.map(planet => (
  <li key={planet}>{planet}</li>
))}
  )


}
const mapStateToProps = (globalState) => {
  return {
    planets: globalState.planets
  }
}

export default connect(mapStateToProps)(Maori)