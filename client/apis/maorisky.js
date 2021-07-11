import request from 'superagent'

const rootUrl = '/api/v1'

export function getMaoriSky () {
  return request.get(rootUrl + '/maorisky')
    .then(res => {
      return res.body.maorisky
    })
}

// import request from 'superagent'
 import { getAuthorizationHeader } from 'authenticare/client'

// const rootUrl = '/api/v1/UserStory'
const acceptJsonHeader = { Accept: 'application/json' }

export function getUserStories () {
  return request.get(rootUrl)
    .set(acceptJsonHeader)
    .then(res => {
      return res.body.userstories
    })
    .catch(logError)
}

export function addUserStory (userstory) {
  return request.post(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(userstory)
    .then(res => res.body.userstory)
}

export function updateUserStory (userstory) {
  return request.put(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(userstory)
    .then(res => res.body.userstory)
    .catch(logError)
}

export function deleteUserStory (id) {
  return request.delete(`${rootUrl}/${id}`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then(res => res.body.userstory)
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the story may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}