const router = require('express').Router()
const users = require('../controllers/users.controller')

router.post('/register', users.registerUser)
router.post('/login', users.loginUser)

module.exports = router
