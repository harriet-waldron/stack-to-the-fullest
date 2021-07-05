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
