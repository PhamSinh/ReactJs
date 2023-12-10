import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./hero-slide.scss";
import MovieStar from "../movie-star/movie-star";
import MovieButton from "../button/button";
import { useNavigate } from "react-router-dom";

function HeroSlide() {
  const navigate = useNavigate();
  const trendingMovives = useSelector(
    (state: RootState) => state.movies.trendingMovives
  );
  console.log(trendingMovives);

  return (
    <>
      <Carousel>
        {trendingMovives.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          trendingMovives.slice(0, 3).map((item) => (
            <Carousel.Item key={item.id} className="hero-slide-item">
              <Image src={item.poster} fluid />
              {/* <Carousel.Caption > */}
              <div className="hero-slide-item-content">
                <div className="item-content-wrapper">
                  <div className="item-content-title top-down delay-2 text-capitalize">
                    {item.title}
                  </div>
                  <div className="movie-infos top-down delay-4">
                    <div className="movie-info">
                      <MovieStar star={item.vote} />
                    </div>
                    {/* <div className="movie-info">
                      <i className="bx bx-time"></i>
                      <span>{item.release_date}</span>
                    </div> */}
                    <div className="movie-info">
                      {/* <span>{{ item.quality }}</span> */}
                    </div>
                    <div className="movie-info">
                      {/* <span>{{ item.ageAccepted }}</span> */}
                    </div>
                  </div>
                  <div className="item-content-description top-down delay-6">
                    {item.overview}
                  </div>
                  <div className="item-action top-down delay-8">
                    <MovieButton label="Watch more..." onClick={() => { navigate(`/detail/${item.id}`) }} />
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
