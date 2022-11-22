const router = require('express').Router()
const users = require('../controllers/users.controller')

router.post('/register', users.registerUser)
router.post('/login', users.loginUser)
router.get('/allusers', users.allUsers)

module.exports = router
