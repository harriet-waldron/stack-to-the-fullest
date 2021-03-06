import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserStories, addUserStory } from '../apis/userstory'
import { fetchUserStories, addNewUserStory } from '../actions'
import UserStory from './UserStory'


function AddStory ({ setStories, closeAddForm, dispatch }) {
  const [newStory, setNewStory] = useState(false)

  function handleAddChange (e) {
    const { name, value } = e.target
    setNewStory({
      ...newStory,
      [name]: value
    })
  }

  function handleAdd () {
    console.log(newStory)
    //const story = { ...newStory }
    dispatch(addNewUserStory(newStory))
      //.then(setStories)
      //.then(closeAddForm)
     
  }

  const { name: addingName, userstory: addingStory } = newStory

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




