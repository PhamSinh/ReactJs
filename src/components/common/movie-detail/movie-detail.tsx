import { useDispatch } from "react-redux";
import { MediaItemType } from "../../../services/MediaType.model";
import MovieButton from "../button/button";
import MovieStar from "../movie-star/movie-star";
import "./movie-detail.scss";
import { movieDetailAction } from "../../../store/movie-detail-slice";
import MovieActor from "../movie-actor/movie-actor";

interface MovieDetailProps {
  movieInfor: MediaItemType;
  SetIsCheckout: (value: boolean) => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieInfor, SetIsCheckout }) => {
  const dispatch = useDispatch();
  dispatch(movieDetailAction.setMovieDetail(movieInfor));


  return (
    <>
      <div className="hero-section">
        <div className="movie-details movie-info-cont">
          <div className="hero-slide-item">
            <img src={movieInfor.poster} alt="" />
            <div className="hero-slide-item-content">
              <div className="item-content-wrapper">
                <div className="item-content-title text-capitalize">{movieInfor.title}</div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <h4>
                      Price: <i className="bx bx-dollar-circle bx-spin fs-4 text-light"></i>
                      {Number(movieInfor.price).toFixed(2)}
                    </h4>
                  </div>
                </div>
                <div className="item-content-description">
                  {movieInfor.category.map((item, i) => (
                    <h3 key={i}>#{item} </h3>
                  ))}
                </div>
                <div className="mt-1 item-action">
                  <MovieButton
                    label="Watch trailer"
                    onClick={() => {
                      dispatch(movieDetailAction.setShow(true));
                    }}
                  />

                  <MovieButton
                    icon={<i className="bx bx-cart"></i>}
                    label="Buy Now"
                    onClick={() =>  SetIsCheckout(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item-content-title text-capitalize">{movieInfor.title}</div>
        <div className="movie-infos">
          <div className="movie-info">
            <MovieStar star={movieInfor.vote} />
          </div>
        </div>

        <div className="movie-infos">
          <div className="movie-info">
            <h4>
              <i className="bx bx-time fs-4"></i>&nbsp;
              {movieInfor.time} minutes
            </h4>
          </div>
        </div>

        <div className="movie-infos">
          <div className="movie-info">
            <h4 className="release-date">
              Release Date: &nbsp;
              {new Date(movieInfor.release_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h4>
          </div>
        </div>

        <div className="item-content-overview mt-3">
          <h4>{movieInfor.overview}</h4>
        </div>

        {movieInfor.actors.length && (
          <div className="section-header">
            <h2>Actors</h2>
          </div>
        )}
      </div>

      <div className="actors-section">
        <div className="container-fluid">
          <div className="row">
            {movieInfor.actors.length &&
              movieInfor.actors.map((actor) => (
                <div className="col-auto" key={actor.id}>
                  <MovieActor actor={actor} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
