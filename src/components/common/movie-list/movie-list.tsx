import { MediaItemType } from "../../../services/MediaType.model";
import "./movie-list.scss";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../movie-card/movie-card";

interface MovieListProps {
  movieList: Array<MediaItemType>;
}

const MovieList: React.FC<MovieListProps> = ({ movieList }) => {
  return (
    <Row >
      {movieList.map((movie) => (
        <Col key={movie.id} sm={6} md={3} xxl={2} className="movie-list-card">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};
export default MovieList;
