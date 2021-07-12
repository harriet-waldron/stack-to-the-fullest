import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { getUserStories, addUserStory } from '../apis/userstory'
import { fetchUserStories } from '../actions'


function AddStory ({ setStories, closeAddForm }) {
  const [newStory, setNewStory] = useState(false)

  function handleAddChange (e) {
    const { name, value } = e.target
    setNewStory({
      ...newStory,
      [name]: value
    })
  }

  function handleAdd () {
    //const story = { ...newStory }
    addUserStory(newStory)
      .then(setStories)
      .then(closeAddForm)
      .then(getUserStories)
      .catch(err => (err.message))
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
        <button type='button' onClick={closeAddForm}>Close</button>
      </form>
    </>
  )
}


export default AddStory




