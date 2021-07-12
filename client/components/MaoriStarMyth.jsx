import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMaoriSky } from '../actions'


 function MaoriStarMyth(props) {

  useEffect(() => {
    props.dispatch(fetchMaoriSky())
  }, [])

const constname = props.match.params.constname

// function findStory() {
// const found = props.maoriskies.find(maorisky => maorisky.constname == constname)
// console.log(found) //add an if underfined return statement
//   if (found !== 'undefined') {
//     return found.story
//    } else {
//      return null
//    }
// }

  return (
    <div>

    <h2>
     {constname}
    </h2>
    <p> Myth
      {/* {findStory()} */}
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