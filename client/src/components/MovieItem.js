const MovieItem = ({movie: { Title, Year, imdbID, Type, Poster }}) => {
        return (
            <ul>
             <li>{Title}</li> 
             <li>{Year}</li>
             <li>{imdbID}</li> 
             <li>{Type}</li>
             <li>{Poster}</li>       
            </ul>
        )
}

export default MovieItem;