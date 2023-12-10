import Card from "react-bootstrap/Card";
import { MediaItemType } from "../../../services/MediaType.model";
import { useNavigate } from "react-router-dom";
import "./movie-card.scss";
import MovieStar from "../movie-star/movie-star";

interface MovieCardProps {
  movie: MediaItemType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const itemList = [];
  for (let index = 0; index < movie.vote; index++) {
    itemList.push(<i className="bx bx-star"></i>);
  }
  const navigate = useNavigate();

  return (
    <>
      <Card className="movie-card">
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={movie.poster}
            alt={movie.title}
            className="card-image"
          />
          <div className="card-body-show ">
            <Card.Title className="text-capitalize">{movie.title}</Card.Title>
            <div className="d-flex justify-content-between">
              <div>
                <span className="text-warning">
                  <MovieStar star={movie.vote}></MovieStar>
                </span>
              </div>
              <div className="d-flex align-items-center fw-bolder">
                <i className="bx bx-calendar-star text-danger fs-5"></i>
                <span>&nbsp; {new Date(movie.release_date).getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="overlay play-icon"
          onClick={() => {
            navigate(`/detail/${movie.id}`);
          }}
        >
          <i className="bx bx-play-circle text-danger"></i>
        </div>
      </Card>
    </>
  );
};
export default MovieCard;
