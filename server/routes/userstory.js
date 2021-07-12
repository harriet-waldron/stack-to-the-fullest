const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/userstory')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getUserStories()
    .then(results => {
      console.log(results)
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// POST /api/v1/storysky
router.post('/', getTokenDecoder(), async (req, res) => {
 // console.log(req.user)
  const newStory = req.body
  if (req.user) {
    console.log('username:', req.user.username)
  } else {
    console.log('authentication token not provided')
  }

  try {
    const stories = await db.addUserStory(newStory, req.user)
    res.json({ stories })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// PUT /api/v1/fruits
router.put('/', getTokenDecoder(), async (req, res) => {
  const newStory = req.body
  if (req.user) {
    console.log('username:', req.user.username)
  } else {
    console.log('authentication token not provided')
  }
  try {
    const story = await db.updateStory(newStory, req.user)
    res.json({ story })
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'Unauthorized, please log in.'
      )
    }
    res.status(500).send(err.message)
  }
})

// DELETE /api/v1/fruits
router.delete('/:id', getTokenDecoder(), async (req, res) => {
  const id = Number(req.params.id)
  try {
    const story = await db.deleteStory(id, req.user)
    res.json({ story })
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'Unauthorized, please log in.'
      )
    }
    res.status(500).send(err.message)
  }
})