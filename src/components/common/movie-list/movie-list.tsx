import { MediaItemType } from "../../../services/MediaType.model";
import "./movie-list.scss";
import Section from "../../common/Section";
import MovieCard from "../movie-card/movie-card";
import { MovieResult } from "./interfaces";
import { API_TOTAL_PAGES_LIMIT, MOVIES_LIST_URL, MOVIE_DETAILS_URL } from "./constants";

interface MovieListProps {
  movieList: Array<MediaItemType>;
}
const posterSizes = [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"
];
const posterSizesArray = [
  posterSizes[1],
  posterSizes[3],
  posterSizes[3],
  posterSizes[3],
  posterSizes[4]
];
const baseUrl = "https://image.tmdb.org/t/p/";
const getFullYearFromDate = (movieList: MovieResult[], index: number) => {
  const releaseDate = movieList[index].release_date;
  return releaseDate && new Date(Date.parse(releaseDate)).getFullYear();
};
const tileWidths = ["100%", "228px", "286px", "286px", "324px"];
const isPreviousData = false;
const MovieList: React.FC<MovieListProps> = ({ movieList }) => {
  return (
    <Section
      isObsolete={isPreviousData}
      itemsList={movieList && movieList.map((movie: MovieResult, index: number) => (
        <MovieCard key={movie.id}
          sizes={posterSizesArray}
          widths={tileWidths}
          imageBaseUrl={baseUrl}
          imagePath={movie.poster_path}
          imageWidth="100%"
          detailsUrl={`${MOVIE_DETAILS_URL}/${movie.id}`}
          title={movie.title}
          subtitle={getFullYearFromDate(movieList, index)}
          genreIds={movie.genre_ids}
          rating={movie.vote_average}
          votes={movie.vote_count} />
      )
      )} ></Section>)
};
export default MovieList;
