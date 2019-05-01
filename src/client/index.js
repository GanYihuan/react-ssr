import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { renderRoutes } from 'react-router-config'
import routes from '../Routes'
import { getClientStore } from '../store'

const store = getClientStore()
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* {
            routes.map(route => (
              <Route {...route}/>
            ))
          } */}
          {
            renderRoutes(routes)
          }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

// hydrate 与 render() 相同，但用于为容器补水，容器的 HTML 内容由 ReactDOMServer 呈现。React 将尝试将事件侦听器附加到现有标记。
ReactDom.hydrate(<App />, document.getElementById('root'))
