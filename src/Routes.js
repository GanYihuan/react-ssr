import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Translation from './containers/Translation'
import App from './App'
import NotFound from './containers/NotFound'

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    key: 'app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
      },
      {
        path: '/translation',
        component: Translation,
        loadData: Translation.loadData,
        exact: true,
        key: 'translation'
      },
      {
        component: NotFound
      }
    ]
  }
]

// export default (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )
