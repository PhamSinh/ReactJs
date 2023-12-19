import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../Wrapper";
import MovieCard from "../movie-card/movie-card";
import { Backdrop } from "./Backdrop";
import { getMovieDetail } from '../../../services/fetchMedia';
import MovieButton from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import "./styleDetail.scss";
import { movieDetailAction } from "../../../store/movie-detail-slice";
import CheckOutModal from '../../../components/Layout/checkout-modal/checkout-modal';
import { RootState } from '../../../store';
import NotifyModal from '../../common/notify-modal/notify-modal';

export const MovieDetail = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  let [model, showUp] = useState(false);
  let { isShowPay, isClosed } = useSelector((store: RootState) => store.detail);


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(movieDetailAction.setClose(false));
    dispatch(movieDetailAction.setShowPay(false));
  }, []);

  const [isCheckout, SetIsCheckout] = useState(false);
  const [, SetIsSuccess] = useState(false);

  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSizes = [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ];
  const backdropSizes = [
    "w300",
    "w780",
    "w1280",
    "original"
  ];

  const backdropSizesArray = [
    backdropSizes[1],
    backdropSizes[1],
    backdropSizes[2],
    backdropSizes[2],
    backdropSizes[3]
  ];

  const posterSizesArray = [
    posterSizes[1],
    posterSizes[2],
    posterSizes[3],
    posterSizes[4],
    posterSizes[5]
  ];

  const tileWidths = ["100%", "100%", "100%", "100%", "100%"];
  const movieDetails = getMovieDetail(id);

  return (
    <>
      {movieDetails && backdropSizesArray && movieDetails.backdrop_path !== null && (
        <Backdrop
          imageBaseUrl={baseUrl}
          imagePath={movieDetails.backdrop_path}
          sizes={backdropSizesArray}
          title={movieDetails.original_title}
          rating={movieDetails.vote_average}
          votes={movieDetails.vote_count}
        />
      )}
      {movieDetails && (
        < Wrapper >
          {/* @ts-ignore */}
          <MovieCard
            oversize={true}
            imageWidth="312px"
            mobile={false}
            widths={tileWidths}
            key={id as string}
            sizes={posterSizesArray}
            imageBaseUrl={baseUrl}
            imagePath={movieDetails.poster_path}
            detailsUrl={`/movie/${id as string}`}
            title={movieDetails.title}
            subtitle={
              movieDetails &&
              movieDetails.release_date &&
              new Date(Date.parse(movieDetails.release_date)).getFullYear().toString()
            }
            releaseDate={movieDetails.release_date}
            rating={movieDetails.vote_average}
            votes={movieDetails.vote_count}
            overview={movieDetails.overview}
          />
          <div className="wrapper-buy">
            <div className="mt-1 item-action">
              <MovieButton
                label="Watch trailer"
                onClick={() => {
                  dispatch(movieDetailAction.setShow(true));
                }}
              />

              {!isClosed && (<MovieButton
                icon={<i className="bx bx-cart"></i>}
                label="Buy Now"
                onClick={() => showUp((v) => !v)}
              />)}

              {isClosed && (<MovieButton
                icon={<i className="bx bx-cart"></i>}
                label="Watch Now"
                onClick={() => {
                  dispatch(movieDetailAction.setShow(true));
                }}
              />)}
            </div>
          </div>

          {!!model && !isClosed && (
            <CheckOutModal detailData={movieDetails} isCheckout={isCheckout} SetIsCheckout={SetIsCheckout} SetIsSuccess={SetIsSuccess}></CheckOutModal>
          )}
          {!!isShowPay && (
            <NotifyModal isSuccess={true} SetIsSuccess={SetIsSuccess} />
          )}
        </Wrapper >
      )}
    </>
  );
};
