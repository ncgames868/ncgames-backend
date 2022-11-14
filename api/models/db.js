const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  user: String,
  pass: String,
  created: Date,
});

// var gameSchema = mongoose.Schema({
//   name: String,
//   image: String,
//   category: String,
//   platforms: Array,
//   price: Number,
//   released: Date,
//   esrb: String,
//   created: Date,
// });

const User = mongoose.model('userSchema', schema);
// const Game = mongoose.model('gameSchema', schema);

const user = new User({
  // Asignamos valores al modelo
  user: userFromFront,
  pass: passFromFront,
});

user.save(function (err) {
  // Grabamos en la DB
  if (err) return handleError(err);
  // saved!
});

/* mongoose types

    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    ObjectId
    Array
    Decimal128
    Map
    Schema
*/
