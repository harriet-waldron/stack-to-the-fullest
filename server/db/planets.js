const connection = require('./connection')

function getPlanetsDB (db = connection) {
  return db('planets').select()
}

module.exports = {
  getPlanetsDB
}
