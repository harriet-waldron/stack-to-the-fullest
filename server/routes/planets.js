// const express = require('express')

// const db = require('../db/planets')

// const router = express.Router()

// router.get('/', (req, res) => {
//   db.getPlanets()
//     .then(results => {
//       res.json({ planets: results.map(planet => planet.name) })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

// module.exports = router
