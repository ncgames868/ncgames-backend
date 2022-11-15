const express = require('express')
const mongoose = require('mongoose')
const userRouter = require("./routes/users.router")
require('dotenv').config()

const users = require('./models/db')

// Routes
const routergames = require('./routes/routerGames')
const routerVarious = require('./routes/routerVarious')

const axios = require('axios')
const API_KEY = process.env.API_KEY // '60fb2544d2e0470a9b1dd79552c621da'; //

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/user", userRouter)
app.use('/games', routergames)
app.use('/', routerVarious)

const baseUrl = 'https://api.rawg.io/api/'

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
  console.log('Successfully conected to GamesDB')
})
