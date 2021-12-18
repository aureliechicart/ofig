// require the pg module
const pg = require('pg');

// create a client
const client = new pg.Client(process.env.PG_URL);

// connect the client
client.connect();

// export the connected client
module.exports = client;