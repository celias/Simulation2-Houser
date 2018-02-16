const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

// Custom Middlewares...
const checkForSession = require('./middlewares/checkForSession');

// Require Controllers...



// Initialize App...
const app = express();

// Connect to db...
massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db)
    }).catch(console.log);

// Set Middlewares
app.use(cors());
app.use(json());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false
    })
);
app.use(checkForSession); // check if the session exists


// API Calls for all Users...


//API Calls for Homes...


// Port connection...listening!
const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});