import React, { useState } from 'react'

import { addStory } from '../apis/maorisky'

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
    const story = { ...newStory }
    addStory(story)
      .then(setStories)
      .then(closeAddForm)
      .catch(err => (err.message))
  }

  const { name: addingName, story: addingStory } = newStory

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
          name='story'
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