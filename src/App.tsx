import { ErrorBoundary } from "react-error-boundary";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { Fallback } from "./core/CorePage/ErrorPage/Fallback";
import { Navbar } from "./core/Navbar/Navbar";
import { MoviesPage } from "./features/movies/MoviesPage";
// import { MoviePage } from 'features/movie/MoviePage';
// import { PeoplePage } from "features/people/PeoplePage";
// import { PersonPage } from "features/person/PersonPage";


export const App = () => (
  <HashRouter>
    <Navbar
      moviesPath={"/movies"}
      peoplePath={"/people"}
    />
    <ErrorBoundary FallbackComponent={Fallback}>
      <Routes>
        <Route path="/movies/:page" element={<MoviesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>
    </ErrorBoundary>
  </HashRouter >
);