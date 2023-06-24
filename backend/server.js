const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoute')
const MongoDBSession = require('connect-mongodb-session')(session);
require('dotenv').config();


const app = express();

const store = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: "mySessions"
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: store
}))

// Connect to the MongoDB database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//Middlewares

app.use(express.json());
app.use(express.static('public'));

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});


app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Pragma', 'no-cache');
    next();
  });
  

app.use(authRoutes);





app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
});