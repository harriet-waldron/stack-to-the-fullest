import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUserStories, deleteStory } from '../actions'


function UserStory (props) {

  
  useEffect(() => {
    props.dispatch(fetchUserStories())
  }, [])
  
  function handleDelete (id) {
      //const story = { ...newStory }
    props.dispatch(deleteStory(id))
  }
  
  return (
    props.userstory.map((userstory) => (
      <li key={userstory.id}>
          {userstory.name} // {userstory.userstory}
          <button type='button' onClick={() => handleDelete(userstory.id)}>Delete Story</button>
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




