// importing environment variables
require('dotenv').config();

const express = require('express');
const expressSession = require('express-session');

// importing the router
const router = require('./app/router');

// port config
const PORT = process.env.PORT || 5050;

const app = express();

// setting express-session middleware
app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: "Guess it!",
  cookie: {
    secure: false,
    maxAge: (1000 * 60 * 60) // one hour
  }
}));

// setting template engine and ejs views folder
app.set('view engine', 'ejs');
app.set('views', './app/views');

// serving static files stored in "integration" folder
app.use(express.static('integration'));

// routing
app.use(router);


// launching the server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});