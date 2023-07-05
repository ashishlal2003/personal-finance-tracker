const { Decimal128 } = require('bson');
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  detail: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Debit', 'Credit']
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
