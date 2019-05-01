import express from 'express'
import proxy from 'express-http-proxy' // node 变成代理服务器 (易于代码纠错)
import { matchRoutes } from 'react-router-config' // 能匹配子路由, matchPath 只匹配父级路由
import { render } from './utils'
import { getStore } from '../store'
import routes from '../Routes'

const app = express()

// 当访问 /api 路由时代理到指定服务器地址
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function(req) {
    // console.log(req.url) // /news.json?secret=PP87ANTIPIRATE
    return '/ssr/api' + req.url
  }
}))
// 同构: 一套 react 代码，在服务器端和客户端分别运行一次
app.use(express.static('public')) // express.static(): 请求静态文件就到 public 目录去找
app.get('*', function(req, res) {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, req.path)
  // const promises = []
  // matchedRoutes.forEach(item => {
  //   if (item.route.loadData) {
  //     promises.push(item.route.loadData(store))
  //   }
  //   item.route.loadData(store) // 调用匹配到的路由组件, 执行该组件下的 lodaData()
  // })
  // Promise
  //   .all(promises)
  //   .then(() => {
      res.send(render(store, routes, req))
    // })
})

let server = app.listen(3000)
