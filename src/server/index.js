import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import {StaticRouter} from 'react-router-dom' // 服务器端渲染路由
import Routes from '../Routes'

const app = express()
app.use(express.static('public')) // 同构：一套 react 代码，在服务器端和客户端分别运行一次

app.get('/', function(req, res) {
  const content = renderToString((
    // context 数据通信
    // location 路径
    <StaticRouter context={{}} location={req.path}>
      {Routes}
    </StaticRouter>
  ))
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
