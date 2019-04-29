import express from 'express'
import Home from './Home'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', function(req, res) {
  res.send(renderToString(<Home/>))
})

const server = app.listen(3000)
