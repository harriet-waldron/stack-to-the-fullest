import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUserStories } from '../actions'


function UserStory (props) {

  useEffect(() => {
      props.dispatch(fetchUserStories())
    }, [])

  
console.log(props)
  return (
    <>
    {/* props.userstories.map(userstory => (
      <li key={userstories.name}>
          {userstory.name} // {userstory.userstory}
      </li>
    )) */}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    userstories: globalState.userstories
  }
}

export default connect(mapStateToProps)(UserStory)




