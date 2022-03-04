import './App.css';
import Movies from './components/Movies.js';
import axios from 'axios';
import { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    movies: [],
    loading: false
  }

  handleClick = (e) => {
    this.setState({ loading: true });
    const id = e.target.id

    let url = (id === '1') ? 'http://www.omdbapi.com/?s=Matrix&apikey=720c3666'  :
                (id === '2') ? 'http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666' : 
                'http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666';

    axios.get(url)
    .then(res => this.setState({ movies: res.data.Search, loading: false }))

    axios.post('http://localhost:5000/movie', this.state.movies)
    .then(response => console.log(response))
    .then(() => axios.post('http://localhost:5000/poster', this.state.movies))
    .catch(error => console.log(error))
  }

  render () {
    return (
      <Fragment>
        <div className='button-group'>
        <Button variant='outline-primary' id='1' onClick={this.handleClick}>Search</Button>
        <Button variant='outline-secondary' id='2' onClick={this.handleClick}>Search</Button>
        <Button variant='outline-warning' id='3' onClick={this.handleClick}>Search</Button>
        </div>
       <Movies loading={this.state.loading} movies={this.state.movies} />
      </Fragment>
    );
  }
}

export default App;
