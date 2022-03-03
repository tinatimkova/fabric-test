import './App.css';
import Movies from './components/Movies.js';
import axios from 'axios';
import { Component, Fragment } from 'react';

class App extends Component {
  state = {
    movies: [],
    loading: false
  }

  handleClick = async(e) => {

    this.setState({ loading: true });

    const id = e.target.id

    let url = (id === '1') ? 'http://www.omdbapi.com/?s=Matrix&apikey=720c3666'  :
                (id === '2') ? 'http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666' : 
                'http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666';

    const res = await axios.get(url);

    console.log(res, id)

    this.setState({ movies: res.data.Search, loading: false });
  }

  render () {
    console.log(this.state.movies)
    return (
      <Fragment>
        <button id='1' onClick={this.handleClick}>Search</button>
        <button id='2' onClick={this.handleClick}>Search</button>
        <button id='3' onClick={this.handleClick}>Search</button>
       <Movies loading={this.state.loading} movies={this.state.movies} />
      </Fragment>
    );
  }
}

export default App;
