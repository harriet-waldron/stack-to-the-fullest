// astral mythology in te ao maori
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchMaoriSkyAction } from '../actions'

function MaoriStars (props) {
  
  useEffect(() => {
    props.dispatch(fetchMaoriSkyAction())
  }, [])


  console.log(props)
  return (
    props.maorisky.map(maorisky => (
      <li key={maorisky.id}>
        <Link to={`/constellation/${maorisky.id}`}>
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