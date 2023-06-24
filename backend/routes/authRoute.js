const express = require('express');
const {
    getSignup,
    getLogin,
    postSignUp,
    postLogin,
    logout,
    isAuth

} = require('../controllers/authController');

const {
    addTrans,
    gettrans,
    deleteTrans
} = require('../controllers/transController');

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

router.post('/add', addTrans);

router.get('/trans', isAuth, gettrans);

router.post('/del', deleteTrans);

module.exports = router;