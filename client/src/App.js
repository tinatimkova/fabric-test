import './App.css';
import Movies from './components/Movies.js';
import axios from 'axios';
import { useState, Fragment } from 'react';
import { Button } from 'react-bootstrap';

const App = () => {

const [movies, setMovies] = useState([]);

  const handleClick = (e) => {
    const id = e.target.id

    let url = (id === '1') ? 'https://www.omdbapi.com/?s=Matrix&apikey=720c3666'  :
                (id === '2') ? 'https://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666' : 
                'https://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666';

    // fetching data from 3rd party API
    axios.get(url)
    .then(res => { setMovies(res.data.Search)})

    // POST request to local database 
    axios.post('http://localhost:5000/movie', movies)
    .then(response => console.log(response))
    .then(() => axios.post('http://localhost:5000/poster', movies))
    .catch(error => console.log(error))
  }

    return (
      <Fragment>
        <div className='button-group'>
        <Button variant='outline-primary' id='1' onClick={handleClick}>Search</Button>
        <Button variant='outline-secondary' id='2' onClick={handleClick}>Search</Button>
        <Button variant='outline-warning' id='3' onClick={handleClick}>Search</Button>
        </div>
       <Movies movies={movies} />
      </Fragment>
    );
}

export default App;
