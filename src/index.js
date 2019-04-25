import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import Home from './containers/Home'

const app = express()
app.use(express.static('public')) // 同构：一套react代码，在服务器端和客户端分别运行一次

const content = renderToString(<Home/>)

app.get('/', function(req, res) {
  res.send(
    `
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
  )
})

var server = app.listen(3000)
