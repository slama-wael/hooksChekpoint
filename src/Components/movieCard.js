import {Card} from "react-bootstrap";
import {Rating} from "@material-ui/lab";



export const MovieCard = ({movie}) => {
  console.log(movie)
    return (
        <div> 
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {movie.image} style={{width: '280px', height: '400px'}}/>
  <Card.Body>
    <Card.Title>{movie.nameMovie}</Card.Title>
    <Card.Text>{movie.description}</Card.Text>
    <Card.Text>{movie.type}</Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly />
  </Card.Body>
</Card>
        </div>
    )
}