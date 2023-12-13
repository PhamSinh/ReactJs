import { createSlice } from "@reduxjs/toolkit";
import { MediaItemType, MediaState } from "../services/MediaType.model";

const initialMovieState: MediaState = {
  loading: false,
  movieList: [],
  trendingMovives: [],
  filterMovies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialMovieState,
  reducers: {
    setMovies: (state, action) => {
      state.movieList = action.payload;
      state.filterMovies = action.payload;
    },
    setTrendingMovies: (state, action) => {
      state.trendingMovives = action.payload;
    },
    setFilterMovies: (state, action) => {
      const { star, year, type } = action.payload;

      let result: MediaItemType[] = [...state.movieList];
      if (star) result = result.filter(movie => +movie.vote_average.toFixed(0) == Number(star));
      if (year) result = result.filter(movie => Number(movie.release_date.slice(0, 4)) == Number(year));
      if (type) result = result.filter(movie => (movie.genre_ids || []).includes(+type));

      state.filterMovies = [...result];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const movieAction = movieSlice.actions;
export default movieSlice.reducer;
