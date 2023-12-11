import { createSlice } from "@reduxjs/toolkit";
import { MovieDetailState } from "../services/MediaType.model";

const initialMovieDetailState: MovieDetailState = {
  isShow: false,
  movieDetail: {
    id: "",
    title: "",
    release_date: "",
    poster: "",
    video: "",
    vote: 0,
    overview: "",
    isTrending: false,
    actor: [],
    category: [],
  },
  actors: [],
};

const movieDetailSlice = createSlice({
  name: "detail",
  initialState: initialMovieDetailState,
  reducers: {
    setMovieDetail: (state, action) => {
      state.movieDetail = { ...action.payload };
    },
    setActors: (state, action) => {
      state.actors = action.payload;
    },
    setShow: (state, action) => {
      state.isShow = action.payload;
    },
    setShowPay: (state, action) => {
      state.isShowPay = action.payload;
    },
    setClose: (state, action) => {
      state.isClosed = action.payload;
    },
  },
});

export const movieDetailAction = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
