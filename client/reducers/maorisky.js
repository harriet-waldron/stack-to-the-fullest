import { SET_MAORISKY } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAORISKY:
      return action.maorisky
    default:
      return state
  }
}

export default reducer
