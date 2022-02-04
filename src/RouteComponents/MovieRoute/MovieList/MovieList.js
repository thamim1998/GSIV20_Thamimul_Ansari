import React, { useEffect } from "react";
import Navbar from "../../../sharedComponent/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovie,
  getAllMovies,
} from "../../../redux/movies/movieSlice";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard/MovieCard";

function MovieList() {
  const dispatch = useDispatch();
  const data = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchAsyncMovie());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          {data
            ? data.map((movie, i) => <MovieCard key={i} {...movie} />)
            : null}
        </Row>
      </Container>
    </div>
  );
}

export default MovieList;
