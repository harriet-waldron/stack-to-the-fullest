import { SET_USERSTORY, DEL_USER_STORY } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERSTORY:
      return action.userstory

    case DEL_USER_STORY:
      return state.filter((story) => story.id !== action.id)

    default:
      return state
  }
}

export default reducer
