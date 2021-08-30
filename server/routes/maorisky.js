const express = require('express')

const db = require('../db/maorisky')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getMaoriSkyDB()
    .then(results => {
      res.json({ maorisky: results.map(maorisky => maorisky) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

