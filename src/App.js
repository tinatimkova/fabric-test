import './App.css';
import Movies from './components/Movies.js';
import axios from 'axios';
import { Component, Fragment } from 'react';

class App extends Component {
  state = {
    movies: [],
    loading: false
  }

  handleClick = async() => {
    this.setState({ loading: true });

    const res = await axios.get('http://www.omdbapi.com/?s=Matrix&apikey=720c3666');

    this.setState({ movies: res.data.Search, loading: false });
  }

  render () {
    return (
      <Fragment>
        <button onClick={this.handleClick}>Search</button>
       <Movies loading={this.state.loading} movies={this.state.movies} />
      </Fragment>
    );
  }
}

export default App;
