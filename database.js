// pg library allows a Node application to talk with Postgres
const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'kristina',
    password: 'secretpassword',
    port: 5432,
    database: 'movie_database'
})

const connectDB = () => 
    client.connect(err => {
    if (err) {
        console.log('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

module.exports = { connectDB, client }