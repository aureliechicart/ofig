// importing environment variables
require('dotenv').config();

const express = require('express');

// importing the router
const router = require('./app/router');

// port config
const PORT = process.env.PORT || 5050;

const app = express();

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