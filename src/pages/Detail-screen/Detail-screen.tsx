import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '../../services/fetchMedia';
import RecommendMovies from '../../components/Layout/recommend-movies/recommend-movies';
import { MovieDetail } from '../../components/common/movie-detail/movie-detail';
import { MediaItemType } from '../../services/MediaType.model';
import MovieModal from '../../components/common/movie-modal/movie-modal';
import { Container } from 'react-bootstrap';
import NotifyModal from '../../components/common/notify-modal/notify-modal';

const DetailScreen = () => {
    const { id } = useParams();
    const [movieInfor, SetMovieInfor] = useState<MediaItemType>();
    const [, SetIsCheckout] = useState(false);
    const [isSuccess, SetIsSuccess] = useState(false);

    useEffect(() => {
        SetMovieInfor(getMovieDetail(id ? id : ""));
        window.scrollTo(0, 0);
    }, [id])


    return (
        <>
            <Container>
                <MovieModal />
                <NotifyModal isSuccess={isSuccess} SetIsSuccess={SetIsSuccess} />
                {movieInfor ? <MovieDetail movieInfor={movieInfor} SetIsCheckout={SetIsCheckout} /> : ""}
                <RecommendMovies />
            </Container>
        </>
    )
}

export default DetailScreen;