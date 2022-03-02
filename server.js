
const express = require('express'); // we can't use import syntax. it's common.js 
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

const model = require('./model.js');

// app.use(express.json())
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();  
// })

// ROUTES

// GET 
app.get('/', (req, res) => res.json({msg: 'Welcome to local API'}));

// POST 
app.post('/', (req, res) => {
    res.send('Register a movie');
});
    // model.getData()
    // .then(response => {
    //     res.status(200).send(response);
    // })
    // .catch(error => {
    //     res.status(500).send(error);
    // })