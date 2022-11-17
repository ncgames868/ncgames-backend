const userModel = require('../models/user')

const createUser = async (data) => {
  // const date = new Date().toISOString().substring(0, 10)
  const newUser = await userModel.create({
    user: data.user,
    pass: data.pass,
  })
  return newUser
}

const registerUser = async (req, res) => {
  const { user, pass } = req.body
  const data = { user, pass }

  if (user && pass) {
    const result = await createUser(data)
    res.status(201).json(result)
  } else {
    res.status(400).json({ message: 'Information is missing' })
  }
}

const loginUser = (req, res) => {
  const { user, pass } = req.body
  const data = { user, pass }

  if (user && pass) {
    try {
      userModel.findOne(
        {
          user: data.user,
          pass: data.pass,
        },
        function (err, result) {
          if (err) {
            return handleError(err)
          }
          console.log('data1', result)
          if (result) res.status(201).json({ message: 'Correct Login' })
          else res.status(400).json({ message: 'Invalid credencials' })
        }
      )
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  } else {
    res.status(400).json({ message: 'Please introduce user and pass' })
  }
}

module.exports = {
  registerUser,
  loginUser,
}
