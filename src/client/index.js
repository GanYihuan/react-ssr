import React from 'react'
import ReactDom from 'react-dom'
import Home from '../containers/Home'

// hydrate 同构
ReactDom.hydrate(<Home/>, document.getElementById('root'))
