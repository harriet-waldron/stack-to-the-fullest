import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import { getUserStoriesAPI, addUserStoryAPI } from '../apis/userstory'
import { fetchUserStoriesAction, addNewUserStoryAction } from '../actions'
import UserStory from './UserStory'


function AddStory ({ setStories, closeAddForm, dispatch }) {
  const [newStoryState, setNewStoryState] = useState(false)

  function handleAddChange (e) {
    const { name, value } = e.target
    setNewStoryState({
      ...newStoryState,
      [name]: value
    })
  }

  function handleAdd () {
    //changed newstory to add state
    dispatch(addNewUserStoryAction(newStoryState))
      //.then(setStories)
      //.then(closeAddForm)
  }
  
//what does this line do exactly?
  const { name: addingName, userstory: addingStory } = newStoryState

  return (
    <>
      <h2>Add new</h2>
      <form>
        <label>Name:</label>
        <input type='text'
          name='name'
          aria-label='adding-name'
          value={addingName || ''}
          onChange={handleAddChange}></input>

        <label>Story:</label>
        <input type='text'
          name='userstory'
          aria-label='adding-story'
          value={addingStory || ''}
          onChange={handleAddChange}></input>

        <button type='button' onClick={handleAdd}>Add Story</button>
        {/* <button type='button' onClick={closeAddForm}>Close</button> */}
      </form>
      <UserStory />
    </>
  )
}


export default connect()(AddStory)




