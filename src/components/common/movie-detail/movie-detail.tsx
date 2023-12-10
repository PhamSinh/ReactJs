import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../Wrapper";
import MovieCard from "../movie-card/movie-card";
import { Backdrop } from "./Backdrop";
import { getMovieDetail } from '../../../services/fetchMedia';
import MovieButton from "../button/button";
import { useDispatch } from "react-redux";
import "./styleDetail.scss";
import { movieDetailAction } from "../../../store/movie-detail-slice";


export const MovieDetail = () => {
  const { id }: any = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

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
  const SetIsCheckout = (input: boolean) => {
    console.log(input);
  }

  const dispatch = useDispatch();
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
            oversize="true"
            imageWidth="312px"
            mobile="177px"
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
            countries={movieDetails.production_countries}
            releaseDate={movieDetails.release_date}
            genresList={movieDetails.genres}
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

              <MovieButton
                icon={<i className="bx bx-cart"></i>}
                label="Buy Now"
                onClick={() => SetIsCheckout(true)}
              />
            </div>
          </div>
        </Wrapper >
      )}
    </>
  );
};
