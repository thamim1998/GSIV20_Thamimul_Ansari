import React, { useEffect } from "react";
import Navbar from "../../../sharedComponent/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovie,
  getAllMovies,
} from "../../../redux/movies/movieSlice";

function MovieList() {
  const dispatch = useDispatch();
  const data = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchAsyncMovie());
    return () => console.log("Clean");
  }, [dispatch]);
  console.log(data, "data");

  return (
    <div>
      <Navbar />
      {data?.length > 0
        ? data.map((movie, i) => <div key={i}> {movie.id} </div>)
        : null}
    </div>
  );
}

export default MovieList;
