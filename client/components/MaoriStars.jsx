// astral mythology in te ao maori
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchMaoriSky } from '../actions'

function MaoriStars (props) {
  console.log(props)
  
  useEffect(() => {
    props.dispatch(fetchMaoriSky())
  }, [])


  return (
    props.maorisky.map(maorisky => (
  <li key={maorisky}>{maorisky.constname} // {maorisky.engname}</li>
))
  )


}
const mapStateToProps = (globalState) => {
  console.log(globalState)
  return {
    maorisky: globalState.maorisky
  }
}

export default connect(mapStateToProps)(MaoriStars)