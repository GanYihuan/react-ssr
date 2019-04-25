import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom' // 服务器端渲染路由
import Routes from '../Routes'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

export const render = (req) => {
  const reducer = (state = {name: 'gan'}, action) => {
    return state
  }
  const store = createStore(reducer, applyMiddleware(thunk))
  const content = renderToString((
    // context 数据通信
    // location 路径
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
    `
}
