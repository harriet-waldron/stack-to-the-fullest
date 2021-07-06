const express = require('express')

const db = require('../db/maorisky')

const router = express.Router()

router.get('/', (req, res) => {
  db.getMaoriSky()
    .then(results => {
      console.log(results)
      res.json({ maorisky: results.map(maorisky => maorisky) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
