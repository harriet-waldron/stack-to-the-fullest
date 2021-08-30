//These try catch statements are what worked for the auth stuff, am a little unfamiliar
// with them. also auth in general

const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/userstory')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  // changed below func to add DB, because I think it is coming from database func
  db.getUserStoriesDB()
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


router.post('/', getTokenDecoder(), async (req, res) => {
 
  // changed const to add Post at end
  const newStoryPost = req.body
  if (req.user) {
    console.log('username:', req.user.username)
  } else {
    console.log('authentication token not provided')
  }

  try {
    //changed adduserstory func, add DB. changed param to match above const
    // and below const to add Post
    const storiesPost = await db.addUserStoryDB(newStoryPost, req.user)
    res.json({ storiesPost })
  } catch (err) {
    res.status(500).send(err.message)
  }
})


router.delete('/:id', getTokenDecoder(), async (req, res) => {
  const id = Number(req.params.id)
  console.log(id)
  try {
    //changed below func name, add DB
    const story = await db.deleteUserStoryDB(id, req.user)
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


// router.delete('/:id', (req, res) => {
//   const id = Number(req.params.id)
//     return db.deleteUserStory(id)
//     .then(() => {
//       return res.json({status:'deleted'})
//     })
// })

// PUT /api/v1/fruits
// router.put('/', getTokenDecoder(), async (req, res) => {
//   const newStory = req.body
//   if (req.user) {
//     console.log('username:', req.user.username)
//   } else {
//     console.log('authentication token not provided')
//   }
//   try {
//     const story = await db.updateStory(newStory, req.user)
//     res.json({ story })
//   } catch (err) {
//     if (err.message === 'Unauthorized') {
//       return res.status(403).send(
//         'Unauthorized, please log in.'
//       )
//     }
//     res.status(500).send(err.message)
//   }
// })
