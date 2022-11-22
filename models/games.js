const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  name: String,
  fav: Number,
  sales: Number,
  stars: Array, // promedio,
  reviews: Array,
})

module.exports = mongoose.model('users', userSchema)
