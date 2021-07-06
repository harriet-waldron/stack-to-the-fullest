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
