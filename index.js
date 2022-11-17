const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

// const users = require('./models/user')

// Routes
const userRouter = require('./routes/users.router')
const routergames = require('./routes/routerGames')
const routerVarious = require('./routes/routerVarious')

const app = express()
app.use(cors())
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', cors(), userRouter)
app.use('/games', cors(), routergames)
app.use('/', cors(), routerVarious)

const server = app.listen(PORT, () => {
  console.log(`Server listening in: https://localhost:${PORT}`)
})

server.on('error', (error) => console.log('Error: ', error.message))

mongoose.connect('mongodb://localhost/gamesdb', (err) => {
  if (err) throw err
  console.log('Successfully conected to GamesDB')
})
