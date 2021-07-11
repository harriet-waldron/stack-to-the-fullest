import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUserStories, addUserStory } from '../apis/userstory'
import { fetchUserStories } from '../actions'


function AddStory ({ setStories, closeAddForm }, props) {
  const [newStory, setNewStory] = useState(false)

  useEffect(() => {
      props.dispatch(fetchUserStories())
    }, [])

  function handleAddChange (e) {
    const { name, value } = e.target
    setNewStory({
      ...newStory,
      [name]: value
    })
  }

  function handleAdd () {
    // const story = { ...newStory }
    addUserStory(newStory)
      .then(setStories)
      .then(closeAddForm)
      .then(getUserStories)
      .catch(err => (err.message))
  }

  const { name: addingName, userstory: addingStory } = newStory

  return (
    <>
    <div>
    props.userstory.map(userstory => (
      <li key={userstory.name}>
        <Link to={`/${userstory.name}`}>
          {userstory.name} // {userstory.userstory}
        </Link>
      </li>
    ))
    </div>
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

const mapStateToProps = (globalState) => {
  return {
    userstories: globalState.userstories
  }
}

export default connect(mapStateToProps)(AddStory)




//  function MaoriStarMyth(props) {

// const constname = props.match.params.constname

// const found = props.maoriskies.find(maorisky => maorisky.constname == constname)
// console.log(found)

//   return (
//     <div>

//     <h2>
//      {constname}
//     </h2>
//     <p> Myth
//       {/* {found.story} */}
//     </p>

//     </div>
//   )
// }


// }

//