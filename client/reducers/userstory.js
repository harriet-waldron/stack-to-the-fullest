import { SET_USERSTORY } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERSTORY:
      return action.userstories
    default:
      return state
  }
}

export default reducer
