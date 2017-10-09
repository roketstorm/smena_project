import {combineReducers} from 'redux'
import sider from './sider'
import profile from './profile'
import candles from './candles'
import auth from './auth'
import {reducer as form} from 'redux-form'

export default combineReducers({
  auth,
  candles,
  form,
  profile,
  sider
})
