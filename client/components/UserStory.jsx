import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUserStoriesAction, deleteStoryAction } from '../actions'


function UserStory (props) {

  
  useEffect(() => {
    props.dispatch(fetchUserStoriesAction())
  }, [])
  
  function handleDelete (id) {
      //const story = { ...newStory }
    props.dispatch(deleteStoryAction(id))
  }
  
  return (
    props.userstory.map((userstoryinput) => (
      <li key={userstoryinput.id}>
          {userstoryinput.name} // {userstoryinput.userstory}
          <button type='button' onClick={() => handleDelete(userstoryinput.id)}>Delete Story</button>
      </li>
    ))
  )
}

const mapStateToProps = (globalState) => {
  
  return {
    userstory: globalState.userstory
  }
}

export default connect(mapStateToProps)(UserStory)




