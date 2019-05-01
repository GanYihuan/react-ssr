import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import App from './App'

export default [
  {
    path: '/',
    component: App,
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
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
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
