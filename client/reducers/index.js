import { combineReducers } from 'redux'

import planets from './planets'
import maorisky from './maorisky'
import userstory from './userstory'

export default combineReducers({
  planets,
  maorisky,
  userstory
})
