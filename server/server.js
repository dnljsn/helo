//require in dependencies
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const massive = require('massive');
const authCtrl = require('./authCtrl');

// initialize express app
const app = express();

// destructure from .env
let { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;
// connect to db
massive(CONNECTION_STRING).then(db => app.set('db', db))

// middleware
app.use(express.json());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false

}))
// endpoints
app.post('/auth/signup', authCtrl.signup)
app.post('/auth/login', authCtrl.login)
app.post('/api/create-post', authCtrl.createPost)
app.get('/auth/post/:id')
app.get('/auth/logout', authCtrl.logout)

// listen on port
app.listen(SERVER_PORT, () => {
    console.log(`Listening to port: ${SERVER_PORT}`);
})