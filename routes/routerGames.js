const express = require('express')
const router = express.Router()

//Controllers
const gamesController = require('../controllers/gamesController')

router.get('/', (req, res) => gamesController(req, res))

module.exports = router
