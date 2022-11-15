const router = require("express").Router();
const usersServices = require("../users/users.services");

router.post("/register", usersServices.registerUser);
router.post("/login", usersServices.loginUser);

module.exports = router