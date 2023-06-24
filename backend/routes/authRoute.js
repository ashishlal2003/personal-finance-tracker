const express = require('express');
const {
    getSignup,
    getLogin,
    postSignUp,
    postLogin,
    logout

} = require('../controllers/authController');

const router = express.Router();

//GET the SignUp page
router.get('/',getSignup);

//GET the login page
router.get('/login',getLogin)

//POST the signup page
router.post('/', postSignUp);

//POST the login page
router.post('/trans', postLogin);

//POST the logout
router.post('/logout', logout);

module.exports = router;