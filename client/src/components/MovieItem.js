import  { Card } from 'react-bootstrap';

const MovieItem = ({movie: { Title, Year, Type, Poster }}) => {
        return (
            // <ul>
            //  <li><h3>{Title}</h3></li> 
            //  <li>Release Date: {Year}</li>
            //  <li><h5>{Type}</h5></li>
            //  <li><img src={Poster} alt='movie poster'/></li>       
            // </ul>
                <Card>
                    <Card.Img variant='top' src={Poster} alt='movie-poster' />
                    <Card.Body>
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            <h5>Release Date: {Year}</h5>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className='text-muted'>{Type}</small>
                    </Card.Footer>
                </Card>
        )
}

export default MovieItem;