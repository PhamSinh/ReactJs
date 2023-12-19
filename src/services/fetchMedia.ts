import { MediaItemType } from "./MediaType.model";

import dataMovie from "../../public/data-demo.json"

const getMovies = () => {
  return dataMovie;
};

const getTrendingMovies = () => {
  return dataMovie.filter(movie => movie.isTrending);
};

const getMovieDetail = (id: string): MediaItemType => {
  return dataMovie.filter(movie => +movie.id == +id)[0] as MediaItemType;
}

export {
  getMovies, getTrendingMovies, getMovieDetail
};
