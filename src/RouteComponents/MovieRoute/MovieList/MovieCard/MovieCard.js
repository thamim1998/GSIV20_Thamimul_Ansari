import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function MovieCard({ backdrop_path, title, vote_average, overview, id }) {
  return (
    <Col xs={12} md={4} lg={3} className="mt-2 mb-4">
      <Card className="movie-card">
        <Card.Img src={IMG_API + backdrop_path} className="card-img" />
        <Card.Body>
          <div className="details">
            <h6>{title}</h6>
            <Card.Text>{vote_average}</Card.Text>
          </div>
          <Card.Text>{overview.substring(0, 60)}</Card.Text>
          <Link to={`/${id}`}>
            <Card.Text>View Description</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
