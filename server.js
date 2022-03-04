
const express = require('express'); // we can't use import syntax. it's common.js 
const { connectDB, client } = require('./database.js');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');


app.listen(port, () => console.log(`Listening on port ${port}`));

// connect Database
connectDB();

// app.use(express.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();  
})

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // these methods will parse the incoming requests and extract the body

// ROUTES

// GET movies
app.get('/movies', (req, res) => {
    client.query('Select * from movies')
        .then(response => {
            res.status(200).json(response.rows);
        })
        .catch(error => {
            res.status(500).send(error);
        })
});

// GET posters
app.get('/posters', (req, res) => {
    client.query('Select * from posters')
        .then(response => {
            res.status(200).json(response.rows);
        })
        .catch(error => {
            res.status(500).send(error);
        })
});

// POST movies
app.post('/movie', (req, res) => {
    try { for (let i=0; i < req.body.length; i++) {
        client.query('INSERT INTO movies(title, year, imdbid, type) VALUES($1, $2, $3, $4) ON CONFLICT (imdbid) DO NOTHING RETURNING *;',
        [   req.body[i].Title,
            req.body[i].Year,
            req.body[i].imdbID,
            req.body[i].Type
        ])}
    } catch(error) {
     console.log(error)
    } finally {
      res.status(201).send("OK");
     }
});

// POST posters
app.post('/poster', (req, res) => {
    try { for (let i=0; i < req.body.length; i++) {
        if (req.body[i].Poster !== 'N/A') {
            client.query('INSERT INTO posters(movie_id, url) VALUES($1, $2) ON CONFLICT (movie_id) DO NOTHING RETURNING *;',
            [req.body[i].imdbID, req.body[i].Poster ])}
        }
    } catch(error) {
     console.log(error)
    } finally {
      res.status(201).send("OK");
     } 
})