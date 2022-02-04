import { useSelector } from "react-redux";
import { getAllMovies } from "../../../redux/movies/movieSlice";
import { Container, Row, Col } from "react-bootstrap";
import "./MovieDetails.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function MovieDetail({ match }) {
  const movieId = match.params.id;
  const data = useSelector(getAllMovies);

  const movieDetails = data.find((o) => o.id == movieId);

  return (
    <Container>
      <Row className="m-3">
        <Col>
          <img
            src={IMG_API + movieDetails.backdrop_path}
            className="img"
            alt="pic"
          />
        </Col>
        <Col>
          <div className="header">
            <h6>{movieDetails.title}</h6>
            <span>
              <p><b className="p-1">Rating :</b>{movieDetails.vote_average}</p>
            </span>
          </div>
          <p> {movieDetails.overview} </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
