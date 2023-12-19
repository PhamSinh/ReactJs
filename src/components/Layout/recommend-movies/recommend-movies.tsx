import { useSelector } from "react-redux";
import MovieList from "../../common/movie-list/movie-list";
import { RootState } from "../../../store";

import "./recommend-movies.scss"

const RecommendMovies: React.FC = ()=> {
    const movieState = useSelector((state: RootState) => state.movies.trendingMovives);
    return (
        <>
            <div className="section-header">
                <h1>Recommend Movies</h1>
            </div>
            <MovieList movieList={movieState} />
        </>
    )
}

export default RecommendMovies;