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

// client.query('Select * from movies', (err, res) => {
//     if (!err) {
//         console.log(res.rows)
//     } else {
//         console.log(err.message)
//     }
//     client.end;
// })

module.exports = { connectDB, client }