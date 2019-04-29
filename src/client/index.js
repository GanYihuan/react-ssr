import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Routes from '../Routes'
import getStore from '../store'

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>
  )
}

// hydrate 与 render() 相同，但用于为容器补水，容器的 HTML 内容由 ReactDOMServer 呈现。React 将尝试将事件侦听器附加到现有标记。
ReactDom.hydrate(<App />, document.getElementById('root'))
