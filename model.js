// pg library allows a Node application to talk with Postgres
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'kristina',
    host: 'localhost',
    database: 'movie_database',
    port: 5432
})


const getData = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from movies', (error, results) => {
           if (error) {
               reject(error)
           } 
           resolve(results.rows);
        })
    })
}

module.exports = {
    getData
}