const connection = require('./connection')

function getMaoriSky (db = connection) {
  return db('maorisky').select()
}


module.exports = getMaoriSky


// {id: 3, constname: 'Tautoro', story: 'Say some things', userstory: "Met a star three times"}