import { useSelector } from "react-redux";
import MovieList from "../../common/movie-list/movie-list";
import { RootState } from "../../../store";

import "./movie-series.scss"
import { Link } from "react-router-dom";

const MovieSeries: React.FC = ()=> {
    const movieState = useSelector((state: RootState) => state.movies.movieList);
    return (
        <>
            <div className="section-header d-flex justify-content-between">
                <h1>Movie Series</h1>
                <Link to="/list-movie" className="view-more icon-link-hover">
                    <span className="text-danger">View more <i className="bx bx-right-arrow-alt"></i></span>
                </Link>
            </div>
            <MovieList movieList={movieState} />
        </>
    )
}

export default MovieSeries;