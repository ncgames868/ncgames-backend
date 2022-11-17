const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/users.router')
const cors = require('cors')

require('dotenv').config()

const users = require('./models/user')

// Routes
const routergames = require('./routes/routerGames')
const routerVarious = require('./routes/routerVarious')

const axios = require('axios')
const API_KEY = process.env.API_KEY

const app = express()
app.use(cors())
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', cors(), userRouter)
app.use('/games', cors(), routergames)
app.use('/', cors(), routerVarious)

// const baseUrl = 'https://api.rawg.io/api/'

// app.get('/', (req, res) => {
//   res.status(200).send({ key: 'hola mundo' })
// })

// app.post('/login', (req, res) => {
//   const { user, pas } = req.body
//   const resp = conecta bd.find(user, pass)
//   if (resp) {
//     res.status(200).json({'fav'})
//   } else {
//     res.status(404).json('Error': 'usuario o contarseña incorrecta')
//   }

// })

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

app.get('/fetchdata', (req, res) => {
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
