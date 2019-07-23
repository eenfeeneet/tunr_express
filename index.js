console.log("starting up!!");

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const configs = {
    user: 'mhafiz',
    host: '127.0.0.1',
    database: 'tunr_db',
    password:'popo25',
    port: 5432
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



// Init express app
const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/', (req, res) => {
  // query database for all pokemon
  let queryText = 'SELECT * FROM items ORDER BY id ASC';
  pool.query(queryText, (err, result) => {
    if (err) {
      console.error('query error:', err.stack);
      response.send( 'query error' );
    } else {
      console.log('query result:', result);


      // respond with HTML page displaying all pokemon
      response.render('home');
  }
});

app.get('/new', (request, response) => {
  // respond with HTML page with form to create new pokemon
  response.render('new');
});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const port = 3000;
const server = app.listen(port, () => console.log(`~~~ Tuning in to the waves of port ${port} ~~~`));

let onClose = function(){
    console.log("closing");
    server.close(() => {
        console.log('Process terminated');
        pool.end( () =>
            console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);