export interface MediaState {
  loading: boolean;
  movieList: Array<MediaItemType>;
  filterMovies: Array<MediaItemType>;
  trendingMovives: Array<MediaItemType>;
}

export interface MovieDetailState {
  isShow: boolean;
  isShowPay: Boolean;
  isClosed: Boolean;
  movieDetail: MediaItemType;
  actors: Array<ActorModel>
}

export interface MediaItemType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface ActorModel {
  id: string;
  name: string;
  avatarUrl: string;
}
