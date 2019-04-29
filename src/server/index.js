import express from 'express'
import { render } from './utils'

const app = express()

// 同构: 一套 react 代码，在服务器端和客户端分别运行一次
app.use(express.static('public')) // express.static(): 请求静态文件就到 public 目录去找
app.get('*', function(req, res) {
  res.send(render(req))
})

let server = app.listen(3000)
