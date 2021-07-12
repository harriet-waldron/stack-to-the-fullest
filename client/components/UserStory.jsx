import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUserStories, deleteStory } from '../actions'


function UserStory (props) {
console.log(props)
  useEffect(() => {
      props.dispatch(fetchUserStories())
    }, [])

    function handleDelete (userstory) {
      //const story = { ...newStory }
      props.dispatch(deleteStory(userstory.id))
        .then(setStories)
        .then(getUserStories)
        .catch(err => (err.message))
    }

  return (
    props.userstory.map(userstory => (
      <li key={userstory.name}>
          {userstory.name} // {userstory.userstory}
          <button type='button' onClick={handleDelete}>Delete Story</button>
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




