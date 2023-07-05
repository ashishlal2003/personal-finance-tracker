const mongoose = require('mongoose');
const express = require('express');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const session = require('express-session');
const Transaction = require('../models/transactionSchema');

const isAuth = (req,res,next)=>{
    if(req.session.isAuth){
      next();
    }
    else{
      res.redirect('/');
    }
  };

const getSignup = async(req,res,next) => {
    res.render('signUp')
}

const getLogin = async(req,res,next) => {
    res.render('login');
}

const postSignUp = async(req,res,next) => {
    const saltRounds = 10;
    const {name,email,password} = req.body;

    // console.log(req.body);

    const user = await User.findOne({email});

    if(user){
      return res.redirect('/?msg=User%20already%20exists!');
    }
  
    try{
      //Generating a random salt value
      const salt = await bcrypt.genSalt(saltRounds);

      //Hash the password along with the salt
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({name, email, password: hashedPassword});

      res.redirect('/login?msg=Please%20login%20with%20your%20new%20account');
    }
    catch(err){
      res.status(400).json({err:err.message});
    }
}

const postLogin = async(req,res,next) => {
    const {email, password} = req.body;

    try{
      const user = await User.findOne({email});

      if(!user){
        return res.status(401).json({err: 'Invalid email'});
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if(passwordMatch){
        // res.render('pre-workspace',{ user })
        req.session.isAuth = true;
      req.session.user = user;

      const transactions = await Transaction.find({ creator: user._id });

  
      res.render('trans', { transactions, user });
      
      }
  
      else{
        console.log("incorrect");
        res.redirect('/');
      }
    }

    catch(err){
      console.log(err);
      res.status(500).json({err:err.message});
    }
};

const logout = (req, res, next) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
      res.redirect('/');
    });
};

module.exports = {
    getSignup,
    isAuth,
    getLogin,
    postSignUp,
    postLogin,
    logout
}