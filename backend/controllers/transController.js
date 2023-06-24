const mongoose = require('mongoose');
const express = require('express');
const User = require('../models/userSchema');
const session = require('express-session');
const Transaction = require('../models/transactionSchema');

const addTrans = async (req, res, next) => {
    try {
      const { details, amount, typetrans } = req.body;
      const user = req.session.user;
  
      const transaction = new Transaction({
        detail: details,
        amount,
        type: typetrans,
        creator: user._id,
      });
  
      await transaction.save();
      console.log(transaction);
  
      const transactions = await Transaction.find({ creator: user._id });
      console.log(transactions);
  
      res.render('trans', { transactions, user });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };
  

const gettrans = async(req,res,next) => {
    res.render('trans');
};

module.exports = {
    addTrans,
    gettrans
}