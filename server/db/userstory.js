const connection = require('./connection')

function getUserStories (db = connection) {
  return db('userstories').select()
}

async function addUserStory (userstory, user, db = connection) {

  userstory.added_by_user = user.id
  return db('userstories')
    .insert({
      name: userstory.name,
      userstory : userstory.userstory
    })
    // .then(() => db)
    .then(() => { 
      return getUserStories() 
    })
    // .then(sort)
}

async function deleteUserStory (id, user, db = connection) {
  // console.log(userstory)

  // userstory.added_by_user = user.id
  return db('userstories')
    .delete()
    .where('id', id)
}

module.exports = {
  getUserStories, 
  addUserStory,
  deleteUserStory
}
