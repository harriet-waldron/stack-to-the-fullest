const connection = require('./connection')

function getMaoriSkyDB (db = connection) {
  return db('maorisky').select()
}


module.exports = {
   getMaoriSkyDB
}

// {id: 3, constname: 'Tautoro', story: 'Say some things', userstory: "Met a star three times"}