import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovie = createAsyncThunk("movie/fetch", async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eee8f2920fa28653902a137dcad5b867"
  );
  return res.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: {},
  },
  reducers: {},
  extraReducers: {
    [fetchAsyncMovie.pending]: () => {},
    [fetchAsyncMovie.fulfilled]: (state, action) => {
      state.moviesList = action.payload;
    },
    [fetchAsyncMovie.rejected]: (state) => {
      console.log("Rejected");
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = createSelector(
  (state) => state.movies,
  (movies) => movies.moviesList.results
);
export default movieSlice.reducer;
