import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMaoriSky } from '../actions'


 function MaoriStarMyth(props) {

  useEffect(() => {
    props.dispatch(fetchMaoriSky())
  }, [])

const constname = props.match.params.constname

const found = props.maoriskies.find(maorisky => maorisky.constname == constname)
console.log(found)
  return (
    <div>
    <h2>
     {constname}
    </h2>
    <p>
     {found.story}
    </p>

    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    maoriskies: globalState.maorisky
  }
}

export default connect(mapStateToProps)(MaoriStarMyth)