const express = require('express')
const router = express.Router()

//Controllers
const gameByIdcontroller = require('../controllers/gameByIdcontroller')

router.get('/', (req, res) => gameByIdcontroller(req, res))

module.exports = router
