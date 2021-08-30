import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const rootUrl = '/api/v1/userstories'
const acceptJsonHeader = { Accept: 'application/json' }

//add api to end of all funcs and input to params
//remind me, where do apis get their input from?

export function getUserStoriesAPI () {
  return request.get(rootUrl)
    .set(acceptJsonHeader)
    .then(res => {
      console.log(res.body)
     return res.body
    })
    .catch(logError)
}

export function addUserStoryAPI (userstoryinput) {
  return request.post(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(userstoryinput)
    //where is stories from? body ofc but..
    .then(res => res.body.stories)
}

export function updateUserStoryAPI (userstoryinput) {
  return request.put(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(userstoryinput)
    //where is userstory from? potentially from routes?
    .then(res => res.body.userstory)
    .catch(logError)
}

export function deleteUserStoryAPI (id) {
  // console.log('this is the id', id)
  // that is NOT the id, that is the index
  return request.delete(`${rootUrl}/${id}`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then(res => res.body)
    .catch(logError)
}

//why was this not being exported?
 function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the story may update and delete it')
  } else {
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}