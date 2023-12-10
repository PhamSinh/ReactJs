import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react"

import HomePage from "./pages/HomePage";
import "./App.scss";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import DetailScreen from "./pages/Detail-screen/Detail-screen";
import { useDispatch } from "react-redux";
import { getMovies, getTrendingMovies } from "./services/fetchMedia";
import { movieAction } from "./store/movie-slice";
import ListMovie from "./pages/List-movie/list-movie";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.setMovies(getMovies()));
    dispatch(movieAction.setTrendingMovies(getTrendingMovies()));
  });
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/detail/:id" element={<DetailScreen />} />
          <Route path="/list-movie" element={<ListMovie />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
