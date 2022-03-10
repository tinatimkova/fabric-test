## Test requirements

Build an application using JavaScript and/or PHP which has the following features:

- 3 button components which trigger API GET requests;
- A component that renders the API results in a presentable way;

Clicking each button should fetch data using their own API URL. Once the data is fetched, it needs to be stored in a local database.

If a record has a poster, the poster should be stored in its own table and create a relevant relation to the record.

You should fetch data on the back-end, and store only unique data in the database.

## Development process

The development process included the following steps:

1. Creating buttons, movies and movieItem components;
2. Writing a function to fetch data from a 3rd party API and display it on the front-end;
3. Setting up a local postgres database, creating Movies and Posters tables;
4. Writing the backend and connecting it to existing database;
5. Testing the endpoints with Postman;
6. Connecting front-end and backend (getting data from the react state and inserting it into local database);
7. Using react bootstrap for styling UI components.

## Database

| Movies |
| ------ | ----------- |
| title  | text        |
| year   | smallint    |
| type   | varchar(30) |
| imdbid | varchar(30) |

_imdbid - primary key_

| Posters  |
| -------- | ---------- |
| url      | text       |
| movie_id | varchar(3) |

_movie_id - foreign key, references movies(imdbid)_

## Technologies used

- React: front-end JavaScript library;
- Express: web application framework for Node. js;
- Postgres: relational database management system;
- React-Bootstrap: React UI library;
