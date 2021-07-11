const connection = require('./connection')

function getMaoriSky (db = connection) {
  return db('maorisky').select()
}

async function addStory (userstory, user, db = connection) {
  story.added_by_user = user.id
  return db('maorisky')
    .insert(userstory)
    .then(() => db)
    .then(getMaoriSky)
    .then(sort)
}

module.exports = {
  getMaoriSky,
  addStory
}
