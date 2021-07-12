import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUserStories } from '../actions'


function UserStory (props) {

  useEffect(() => {
      props.dispatch(fetchUserStories())
    }, [])

  
console.log(props)
  return (
    props.userstory.map(userstory => (
      <li key={userstory.name}>
          {userstory.name} // {userstory.userstory}
      </li>
    ))
  )
}

const mapStateToProps = (globalState) => {
  console.log(globalState.userstory)
  return {
    userstory: globalState.userstory
  }
}

export default connect(mapStateToProps)(UserStory)




