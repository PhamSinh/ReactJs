export interface MediaState {
  loading: boolean;
  movieList: Array<MediaItemType>;
  filterMovies: Array<MediaItemType>;
  trendingMovives: Array<MediaItemType>;
}

export interface MovieDetailState {
  isShow: boolean;
  movieDetail: MediaItemType;
  actors: Array<ActorModel>
}

export interface MediaItemType {
  id: string;
  title: string;
  release_date: string;
  poster: string;
  video: string;
  vote: number;
  overview: string;
  isTrending: boolean;
  price: number;
  time: number;
  actors: Array<ActorModel>;
  category: Array<string>;
}

export interface ActorModel {
  id: string;
  name: string;
  avatarUrl: string;
}
