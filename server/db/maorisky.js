const connection = require('./connection')

function getMaoriSky (db = connection) {
  return db('maorisky').select()
}

module.exports = {
  getMaoriSky
}
