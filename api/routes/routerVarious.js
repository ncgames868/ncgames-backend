const express = require('express')
const router = express.Router()

//Controllers
const categoriesController = require('../controllers/categoriesController')
const publishersController = require('../controllers/publishersController')
const platformsController = require('../controllers/platformsController')

router.get('/categories', (req, res) => categoriesController(req, res))
router.get('/publishers', (req, res) => publishersController(req, res))
router.get('/platforms', (req, res) => platformsController(req, res))
router.get('/', (req, res) => homeController(req, res))

module.exports = router
