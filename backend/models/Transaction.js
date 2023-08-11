const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
  title: String,
  type : String,
  categoria: String,
  value: Number,
  createdAt: { type: Date,default: Date.now }
})


const Transaction = mongoose.model('transaction',transactionsSchema)

module.exports = Transaction;