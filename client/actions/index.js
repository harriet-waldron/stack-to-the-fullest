import { getPlanets } from '../apis/planets'

export const SET_PLANETS = 'SET_PLANETS'

export function setPlanets (planets) {
  return {
    type: SET_PLANETS,
    planets
  }
}

export function fetchPlanets () {
  return dispatch => {
    return getPlanets()
      .then(planets => {
        dispatch(setPlanets(planets))
        return null
      })
  }
}



import { getMaoriSky } from '../apis/maorisky'

export const SET_MAORISKY = 'SET_MAORISKY'

export function setMaoriSky (maorisky) {
  return {
    type: SET_MAORISKY,
    maorisky
  }
}

export function fetchMaoriSky () {
  return dispatch => {
    return getMaoriSky()
      .then(maorisky => {
        dispatch(setMaoriSky(maorisky))
        return null
      })
  }
}

import { getUserStories, addUserStory, updateUserStory, deleteUserStory } from '../apis/userstory'

export const SET_USERSTORY = 'SET_USERSTORY'

export function setUserStory (userstory) {
  return {
    type: SET_USERSTORY,
    userstory
  }
}

export function fetchUserStories () {
  return dispatch => {
    return getUserStories()
      .then(userstory => {
        return dispatch(setUserStory(userstory))
      })
  }
}

export function addNewUserStory (newstory) {
  return dispatch => {
    return addUserStory(newstory)
      .then(userstory => {
        return dispatch(setUserStory(userstory))
      })
  }
}

export const DEL_USER_STORY = 'DEL_USER_STORY'

export function delUserStory (id) {
  return {
    type: DEL_USER_STORY,
    id: id
  }
}

export function deleteStory (id) {
  return dispatch => {
    deleteUserStory(id)
   //here is the issue
      .then((output) => {
        console.log('this is the output', output)
        dispatch(delUserStory(output))
      })
  }
}