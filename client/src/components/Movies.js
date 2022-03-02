import MovieItem from './MovieItem';

const Movies = ({ movies, loading}) => {
    return (
            <div>
                { movies.length > 0 ? movies.map(movie => (
                  <MovieItem key={movie.imdbID} movie={movie} /> 
                )) : null}
            </div>
    ) 
            
}

export default Movies;
