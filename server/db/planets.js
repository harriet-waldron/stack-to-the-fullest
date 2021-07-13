const connection = require('./connection')

function getPlanets (db = connection) {
  return db('planets').select()
}

module.exports = {
  getPlanets
}
