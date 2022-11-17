const mongoose = require('mongoose')

var orderSchema = mongoose.Schema({
  id: Number,
  date: Date,
  desc: String,
  type: String,
  games: Array,
  total: Number,
  delivered: Boolean,
  payment: String,
})

module.exports = mongoose.model('orders', orderSchema)
