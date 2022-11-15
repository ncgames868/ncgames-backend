const usersControllers = require("../controllers/users.controllers");

const registerUser = (req, res) => {
  const { user, pass} = req.body;
  const data = { user, pass };

  if (user && pass) {
    usersControllers.createUser(data)
      .then(res => res.status(201).json(res))
      .catch(err => res.status(400).json({ message: err.message }))
  } else {
    res.status(400).json({ message: "Information is missing"})
  }
}

const loginUser = (req, res) => {
  const { user, pass} = req.body;
  const data = { user, pass };

  if (user && pass) {
    usersControllers.createUser(data)
      .then(res => res.status(200).json(res))
      .catch(err => err.status(400).json({ message: err.message }))
  } else {
    res.status(400).json({ message: "Invalid credencials" });
  }
}

module.exports = {
  registerUser,
  loginUser
}