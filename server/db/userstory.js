//add DB to the end of all datebase functions
//these functions are talking directly to the database

const connection = require('./connection')

function getUserStoriesDB (db = connection) {
  return db('userstories').select()
}
//changed userstory(all in white) param to userstoryinput
async function addUserStoryDB (userstoryinput, user, db = connection) {

  // auth line
  userstoryinput.added_by_user = user.id

  //inserting the input story into the database, cols name and userstory
  return db('userstories')
    .insert({
      name: userstoryinput.name,
      userstory : userstoryinput.userstory
    })
    // .then(() => db)
    .then(() => { 
      //changed getUserStories to add DB, I assume its calling the above function
      // to display the user stories once they've updated
      return getUserStoriesDB() 
    })
    // .then(sort)
}

async function deleteUserStoryDB (id, user, db = connection) {
  // console.log(userstory)

  //userstory.added_by_user = user.id
  return db('userstories')
    .delete()
    .where('id', id)
}

module.exports = {
  getUserStoriesDB, 
  addUserStoryDB,
  deleteUserStoryDB
}
