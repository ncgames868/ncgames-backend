const db = require("../models/db");

const createUser = async data => {
  const newUser = await db.create({
    user: data.user,
    pass: data.pass
  });
  return newUser;
}

module.exports = { createUser };