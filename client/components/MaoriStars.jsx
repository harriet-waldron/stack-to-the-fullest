// astral mythology in te ao maori
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchMaoriSky } from '../actions'

function MaoriStars (props) {
  
  useEffect(() => {
    props.dispatch(fetchMaoriSky())
  }, [])


  return (
    props.maorisky.map(maorisky => (
      <li key={maorisky.constname}>
        <Link to={`/constellation/${maorisky.constname}`}>
          {maorisky.constname} // {maorisky.engname}
        </Link>
      </li>
    ))
  )

}


const mapStateToProps = (globalState) => {
  return {
    maorisky: globalState.maorisky
  }
}

export default connect(mapStateToProps)(MaoriStars)