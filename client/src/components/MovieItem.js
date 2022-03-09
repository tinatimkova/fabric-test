import  { Card } from 'react-bootstrap';
import image from '../img/Placeholder.png';

const MovieItem = ({movie: { Title, Year, Type, Poster }}) => {
        return (
                <Card>
                    <Card.Img variant='top' src={Poster === 'N/A' ? image : Poster } alt='movie-poster' />
                    <Card.Body>
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            Release Date: {Year}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className='text-muted'>{Type}</small>
                    </Card.Footer>
                </Card>
        )
}

export default MovieItem;