import React from "react";
import { Container } from "react-bootstrap";
import HeroSlide from "../components/common/hero-slide/hero-slide";
import MovieSeries from "../components/Layout/Movie-Series/movie-series";
import RecommendMovies from "../components/Layout/recommend-movies/recommend-movies";

const HomePage: React.FC = () => {
//   const movieState = useSelector((state: RootState) => state.movies);
  // const tvState = useSelector((state: RootState) => state.tv);
  return (
    <>
      <Container>
        <HeroSlide />
        <MovieSeries />
        <RecommendMovies />
      </Container>
    </>
  );
};

export default HomePage;
