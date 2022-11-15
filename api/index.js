const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const users = require('./models/db')

//CONTROLLERS
const gamesController = require('./controllers/gamesController')
const categoriesController = require('./controllers/categoriesController')
const publishersController = require('./controllers/publishersController')
const platformsController = require('./controllers/platformsController')

// const router = express.Router()
const axios = require('axios')
const API_KEY = process.env.API_KEY // '60fb2544d2e0470a9b1dd79552c621da'; //

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use('/', router)

const baseUrl = 'https://api.rawg.io/api/'

app.get('/games', (req, res) => gamesController(req, res))

app.get('/categories', (req, res) => categoriesController(req, res))

app.get('/publishers', (req, res) => publishersController(req, res))

app.get('/platforms', (req, res) => platformsController(req, res))

app.get('/inserdata', (req, res) => {
  const { user, pass } = req.query
  const data = [
    {
      user: user,
      pass: pass,
    },
  ]

  users.insertMany(data, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
})

app.get('/fetchdata', (err, res) => {
  const user = req.query.user
  // if ((user = 'all'))
  users.find({}, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
  // else users.find(, (err, result) => {
  //   if (err) {
  //     res.send(err)
  //   } else {
  //     res.send(result)
  //   }
  // })
})

const server = app.listen(PORT, () => {
  console.log(`Server listening in: https://localhost:${PORT}`)
})

server.on('error', (error) => console.log('Error: ', error.message))

mongoose.connect('mongodb://localhost/gamesdb', (err) => {
  if (err) throw err
  console.log('Successfully conected GamesDB')
})
