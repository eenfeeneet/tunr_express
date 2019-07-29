console.log("starting up!!");

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Initialise postgres client
const configs = {
    user: 'mhafiz',
    host: '127.0.0.1',
    database: 'tunr_db',
    password:'popo25',
    port: 5432
};

const pg = require('pg');
const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
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

    res.redirect(301, '/artists');
});
app.get('/testhome', (req, res) => {

    res.render( 'index' );
});
app.get('/artists/', (req, res) => {
    console.log("getting all artist")
    const queryString = 'SELECT * from artists ORDER BY name ASC'
    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            res.send( 'query error' );
        } else {
            console.log('query result:', result.rows);
            // redirect to home page
            const data = {
                requestType : 'artists',
                artists : result.rows
            }
            console.log('requestType:' + data.requestType);
            // res.send(data)
            res.render( 'index', data );
        }
    });
});
app.get('/songs/', (req, res) => {
    console.log("getting all songs")
    const queryString = 'SELECT * from songs ORDER BY title ASC'
    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            res.send( 'query error' );
        } else {
            console.log('query result:', result.rows);
            // redirect to home page
            const data = {
                requestType : 'songs',
                songs : result.rows
            }
            console.log('requestType:' + data.requestType);
            console.log('songs:' + data.songs);
            //res.send(data)
            res.render( 'index', data );
        }
    });
});
app.get('/albums/', (req, res) => {
    console.log("getting all albums")





    const queryString = `
    SELECT
        DISTINCT ON (songs.album) songs.album, songs.artist_id, songs.artwork, artists.name, songs.title
    FROM songs
    INNER JOIN artists ON (songs.artist_id = artists.id)
    ORDER BY album ASC`;

    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            res.send( 'query error' );
        } else {
            console.log('query result:', result.rows);
            // redirect to home page
            const data = {
                requestType : 'albums',
                albums : result.rows
            }
            console.log('requestType:' + data.requestType);
            console.log('albums:' + data.albums);
            //res.send(data)
            res.render( 'index', data );
        }
    });
});





app.get('/artist/new', (req, res) => {
    //query database for all artist
    const url = 'https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg'

    let queryString = "INSERT INTO artists(name, photo_url, nationality) VALUES('Jackie Chan', 'null', 'Hong Kongese') RETURNING id";
    const values = ['Jackie Chan', url, "Hong Kongese"]

    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            res.send( 'query error' );
        } else {
            console.log('query result:', result.rows);
            // redirect to home page
            res.send(result.rows)

            // res.redirect(301, '/artist/${}')
            // res.render( 'home', data );
        }
    });
});
app.get('/artist/:id', (req, res) => {
    //query database for all artist
    const id = req.params.id
    const queryString = `SELECT * from artists WHERE id = ${id}`
    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            res.send( 'query error' );
        } else {
            console.log('query result:', result.rows);
            // redirect to home page
            const data = {
                requestType : 'artist',
                artist : result.rows[0]
            }
            //res.send(data.artist)
            res.render( 'index', data );
        }
    });
});

// app.get('/artist/', (req, res) => {
//   // respond with HTML page with form to create new pokemon
//   response.render('home');
// });
// app.get('/artist/new', (req, res) => {
//   // respond with HTML page with form to create new pokemon
//   response.render('home');
// });
// app.get('/artist', (req, res) => {
//   // respond with HTML page with form to create new pokemon
//   response.render('home');
// });
// app.get('/artist/:id', (req, res) => {
//   // respond with HTML page with form to create new pokemon
//   response.render('home');
// });
// app.get('/artist/:id/:songs', (req, res) => {
//   // respond with HTML page with form to create new pokemon
//   response.render('home');
// });

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const port = 3100;
const server = app.listen(port, () => console.log(`~~~ WOoo Tuning in to the waves of port ${port} ~~~`));

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