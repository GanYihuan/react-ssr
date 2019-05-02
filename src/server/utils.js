import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom' // 服务器端渲染路由
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet' // 定制页面 title & description

export const render = (store, routes, req, context) => {
  // routes.some(route => {
  //   const match = matchPath(req.path, route)
  //   if (match) {
  //     matchedRoutes.push(route)
  //   }
  // })
  // console.log(store.getState())
  const content = renderToString((
    // context 数据通信
    // location 路径
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>
          {
            renderRoutes(routes)
          }
          {/* {
            routes.map(route => (
              <Route {...route} />
            ))
          } */}
        </div>
      </StaticRouter>
    </Provider>
  ))
  const helmet = Helmet.renderStatic() // 服务器端 helmet
  const cssStr = context.css.length ? context.css.join('\n') : '' // css 服务器端渲染
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${cssStr}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/index.js'></script>
      </body>
    </html>
  `
}
