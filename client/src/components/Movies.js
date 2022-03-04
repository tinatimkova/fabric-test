import MovieItem from './MovieItem';

const Movies = ({ movies }) => {
    return (
            <div className='movie-list'>
                { movies.length > 0 ? movies.map(movie => (
                  <MovieItem key={movie.imdbID} movie={movie} /> 
                )) : null}
            </div>
    ) 
            
}

export default Movies;
