import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMaoriSkyAction } from '../actions'


// page works initially but can't refresh, as state is wiped. figure out how to fix
// could add a conditional to check initial state on load
//props.location.state = undefined

 function MaoriStarMyth(props) {
   props.location.state = [] //didnt work, but state showed up as an array instead of undefined
   
   //isnt this where state is initialised?
  useEffect(() => {
    props.dispatch(fetchMaoriSkyAction())
  }, [])

  console.log(props)

  let x = Number(props.match.params.id) -1
  

  return (
    <div>

    <h2>
     {props.maorisky[x].constname}
    </h2>
    <p> 
      {props.maorisky[x].maoristory}
      <br></br>
      <br></br>
      {props.maorisky[x].engstory}
    </p>

    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    maorisky: globalState.maorisky
  }
}

export default connect(mapStateToProps)(MaoriStarMyth)