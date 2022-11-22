const express = require('express')
const router = express.Router()

//Controllers
const bestSellersController = require('../controllers/bestSellersController')

router.get('/', (req, res) => bestSellersController(req, res))

module.exports = router
