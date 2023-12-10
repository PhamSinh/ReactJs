import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../components/common/movie-list/movie-list";
import "./list-movie.scss";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import { MediaItemType } from "../../services/MediaType.model";
import { movieAction } from "../../store/movie-slice";

const ListMovie = () => {
  const [filter, setFilter] = useState({
    star: "",
    year: ""
  });
  const [listMovie, setListMovie] = useState<MediaItemType[]>([]);
  const movieState = useSelector((state: RootState) => state.movies.filterMovies);
  const dispatch = useDispatch();
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>, field: "star" | "year" | "type") => {
    const dataFilter = { ...filter, [field]: e.target.value }
    setFilter(dataFilter);
    dispatch(movieAction.setFilterMovies(dataFilter));
  }

  useEffect(() => {
    setListMovie(movieState);
  }, [movieState])
  return (
    <div className="container">
      <div className="section-header">
        <h1>Movie Series</h1>
      </div>
      <div className="row filter-bar">
        <div className="col-auto">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-dark text-light border-danger border-end-0 rounded-start">
                <i className="fas fa-star"></i>
              </span>
            </div>
            <select
              className="form-select form-select-sm bg-dark text-light border-danger border-start-0 rounded-end"
              aria-label="Default select example" value={filter.star} onChange={(e) => handleFilter(e, "star")}
            >
              <option value="">All Ratings</option>
              <option value="1">1 Stars</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
              <option value="6">6 Stars</option>
              <option value="7">7 Stars</option>
              <option value="8">8 Stars</option>
              <option value="9">9 Stars</option>
            </select>
          </div>
        </div>
        <div className="col-auto ">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-dark text-light border-danger border-end-0 rounded-start">
                <i className="fas fa-calendar"></i>
              </span>
            </div>
            <select className="form-select form-select-sm bg-dark text-light border-danger border-start-0 rounded-end"
              value={filter.year} onChange={(e) => handleFilter(e, "year")}>
              <option value="">All Years</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>

        <div className="col-auto ">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-dark text-light border-danger border-end-0 rounded-start">
                <i className="fa fa-address-book" aria-hidden="true"></i>
              </span>
            </div>
            <select className="form-select form-select-sm bg-dark text-light border-danger border-start-0 rounded-end"
              value={filter.year} onChange={(e) => handleFilter(e, "type")}>
              <option value="">All Type</option>
              <option value="28">Action</option>
              <option value="35">Comedy</option>
              <option value="10751">Family</option>
              <option value="9648">Mystery</option>
              <option value="53">Thriller</option>
            </select>
          </div>
        </div>

        <MovieList movieList={listMovie} />
      </div>
    </div>
  );
};

export default ListMovie;
