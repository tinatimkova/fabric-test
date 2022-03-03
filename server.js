
const express = require('express'); // we can't use import syntax. it's common.js 
const { connectDB, client } = require('./database.js');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const format = require('pg-format');


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

// GET 
app.get('/', (req, res) => {
    client.query('Select * from movies')
        .then(response => {
            res.status(200).json(response.rows);
        })
        .catch(error => {
            res.status(500).send(error);
        })
});

let movies = [{"Title":"Armitage III: Dual Matrix","Year":"2002","imdbID":"tt0303678","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg"},{"Title":"CR: Enter the Matrix","Year":"2009","imdbID":"tt1675286","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg"}]

let query1 = format('INSERT INTO movies(title, year, imdbid, type) VALUES %L RETURNING *', movies);

// POST 
app.post('/movie', (req, res) => {
    try { for (let i=0; i < req.body.length; i++) {
        client.query('INSERT INTO movies(title, year, imdbid, type) VALUES($1, $2, $3, $4) RETURNING *;',
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

app.post('/poster', (req, res) => {
    try { for (let i=0; i < req.body.length; i++) {
        if (req.body[i].Poster) {
            client.query('INSERT INTO posters(movie_id, url) VALUES($1, $2) RETURNING *;',
            [req.body[i].imdbID, req.body[i].Poster ])}
        }
    } catch(error) {
     console.log(error)
    } finally {
      res.status(201).send("OK");
     } 
})