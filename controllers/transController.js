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
  
      // Retrieve the current available balance from the user object or database
      const balance = user.balance || 0;
  
      // Update the available balance based on the transaction type
      if (typetrans === 'Debit') {
        user.balance = parseInt(balance) - parseInt(amount);
      } else if (typetrans === 'Credit') {
        user.balance = parseInt(balance) + parseInt(amount);
      }
      
    console.log(user.balance);
      // Save the updated available balance to the user object or update it in the database
    //   await user.save();
  
      const transactions = await Transaction.find({ creator: user._id });
    //   console.log(transactions);
  
      res.render('trans', { transactions, user });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };
  
  
  const deleteTrans = async (req, res, next) => {
    try {
      const transactionId = req.body.transactionId; // Assuming you have a hidden input field in your form containing the transaction ID
      
      // Delete the transaction from the database using the transactionId
      await Transaction.findByIdAndDelete(transactionId);
      const user = req.session.user;

      const transactions = await Transaction.find({ creator: user._id });
  
      // Redirect the user back to the /trans page after deleting the transaction
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
    gettrans,
    deleteTrans
}