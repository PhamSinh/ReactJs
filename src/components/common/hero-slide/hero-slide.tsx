import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./hero-slide.scss";
import MovieStar from "../movie-star/movie-star";
import MovieButton from "../button/button";
import { useNavigate } from "react-router-dom";
import {
  ImageWrapper,
  Image,
} from "../movie-card/styled";
function HeroSlide() {
  const navigate = useNavigate();
  const trendingMovives = useSelector(
    (state: RootState) => state.movies.trendingMovives
  );

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
  return (
    <>
      <Carousel>
        {trendingMovives.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          trendingMovives.slice(0, 3).map((item) => (
            <Carousel.Item key={item.id} className="hero-slide-item">
              <ImageWrapper>
                <Image
                  sizes={posterSizesArray}
                  baseUrl={baseUrl}
                  path={item.poster_path}
                  alt="image"
                />
              </ImageWrapper>
              {/* <Carousel.Caption > */}
              <div className="hero-slide-item-content">
                <div className="item-content-wrapper">
                  <div className="item-content-title top-down delay-2 text-capitalize">
                    {item.title}
                  </div>
                  <div className="movie-infos top-down delay-4">
                    <div className="movie-info">
                      <MovieStar star={item.vote_average} />
                    </div>
                    <div className="movie-info">
                      <i className="bx bx-time"></i>
                      <span>{item.release_date}</span>
                    </div>
                  </div>
                  <div className="item-content-description top-down delay-6">
                    {item.overview}
                  </div>
                  <div className="item-action top-down delay-8">
                    <MovieButton label="Watch more..." onClick={() => { navigate(`/movie/${item.id}`) }} />
                  </div>
                </div>
              </div>
              {/* </Carousel.Caption> */}
            </Carousel.Item>
          ))
        )}
      </Carousel>
    </>
  );
}

export default HeroSlide;
