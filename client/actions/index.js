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

//APIs are the most confusing, whhere are actions called vs where are apis called?
//changed in response to api change
import { getUserStoriesAPI, addUserStoryAPI, updateUserStoryAPI, deleteUserStoryAPI } from '../apis/userstory'

export const SET_USERSTORY = 'SET_USERSTORY'

//adding action to these funcs
export function setUserStoryAction (userstory) {
  return {
    type: SET_USERSTORY,
    //where is userstory from? must be input? I'll change it to match param for now
    //i think its a reducer
    userstory
  }
}

export function fetchUserStoriesAction () {
  return dispatch => {
    //add api end
    return getUserStoriesAPI()
      .then(result => {
        //change to add action.. 
        return dispatch(setUserStoryAction(result))
      })
  }
}

export const ADD_USER_STORY = 'ADD_USER_STORY'

export function addUserStoryAction (newstoryinput) {
  return {
    type: ADD_USER_STORY,
    newstoryinput
  }
}

export function addNewUserStoryAction (newstoryinput) {
  return dispatch => {
    
    //add api, was this right? unsure
    return addUserStoryAPI(newstoryinput)
      .then(result => {
        
        return dispatch(addUserStoryAction(result))
      })
      .then(() => {
        dispatch(fetchUserStoriesAction())
      })
      .catch(err => (err.message))
  }
}

export const DEL_USER_STORY = 'DEL_USER_STORY'

export function delUserStoryAction (id) {
  return {
    type: DEL_USER_STORY,
    id: id
  }
}
//should I be naming these differently? I'm not sure they're both actions. The first one def is

export function deleteStoryAction (id) {
  return dispatch => {
    deleteUserStoryAPI(id)
   //here is the issue
      .then((output) => {
        console.log('this is the output', output)
        dispatch(delUserStoryAction(output))
        //so this function dispatches itself?
      })
      .then(() => {
        dispatch(fetchUserStoriesAction())
      })
      .catch(err => (err.message))
  }
}