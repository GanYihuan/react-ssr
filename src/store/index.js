import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import {reducer as homeReducter} from '../containers/Home/store'

const reducer = combineReducers({
  home: homeReducter
})

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export default getStore
