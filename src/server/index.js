import express from 'express'
import {render} from './utils'

const app = express()
app.use(express.static('public')) // 同构：一套 react 代码，在服务器端和客户端分别运行一次

app.get('*', function(req, res) {
  res.send(render(req))
})

var server = app.listen(3000)
