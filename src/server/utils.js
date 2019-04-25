import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom' // 服务器端渲染路由
import Routes from '../Routes'

export const rener = (req) => {
  const content = renderToString((
    // context 数据通信
    // location 路径
    <StaticRouter context={{}} location={req.path}>
      {Routes}
    </StaticRouter>
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
