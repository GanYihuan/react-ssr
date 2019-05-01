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

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
  const defaultState = window.context.state // 服务器端 window.context 数据注水; 客户端 window.context 数据脱水
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
