// import movieDetailReducer, { movieDetailAction } from "../../store/movie-detail-slice";


// describe('movieDetailSlice', () => {
//   test('should set movie detail', () => {
//     const initialState = {
//       isShow: false,
//       movieDetail: {
//         id: "",
//         title: "",
//         release_date: "",
//         poster: "",
//         posterHeader: "",
//         video: "",
//         vote: 0,
//         overview: "",
//         isTrending: true,
//         price: 0,
//         time: 0,
//         actors: [],
//         category: [],
//       }
//     };
//     const movieDetail = {
//       id: "123",
//       title: "Movie Title",
//       release_date: "2022-01-01",
//       poster: "poster.jpg",
//       posterHeader: "header.jpg",
//       video: "video.mp4",
//       vote: 5,
//       overview: "Movie overview",
//       isTrending: true,
//       price: 9.99,
//       time: 120,
//       actors: ["Actor 1", "Actor 2"],
//       category: ["Action", "Drama"],
//     };
//     const action = movieDetailAction.setMovieDetail(movieDetail);
//     const newState = movieDetailReducer(initialState, action);
//     expect(newState.movieDetail).toEqual(movieDetail);
//   });

//   test('should set actors', () => {
//     const initialState = {
//       isShow: false,
//       movieDetail: {
//         id: "",
//         title: "",
//         release_date: "",
//         poster: "",
//         posterHeader: "",
//         video: "",
//         vote: 0,
//         overview: "",
//         isTrending: true,
//         price: 0,
//         time: 0,
//         actors: [],
//         category: [],
//       }
//     };
//     const actors = ["Actor 1", "Actor 2"];
//     const action = movieDetailAction.setActors(actors);
//     const newState = movieDetailReducer(initialState, action);
//     expect(newState.movieDetail.actors).toEqual(actors);
//   });

//   test('should set show', () => {
//     const initialState = {
//       isShow: false,
//       movieDetail: {
//         id: "",
//         title: "",
//         release_date: "",
//         poster: "",
//         posterHeader: "",
//         video: "",
//         vote: 0,
//         overview: "",
//         isTrending: true,
//         price: 0,
//         time: 0,
//         actors: [],
//         category: [],
//       }
//     };
//     const isShow = true;
//     const action = movieDetailAction.setShow(isShow);
//     const newState = movieDetailReducer(initialState, action);
//     expect(newState.isShow).toEqual(isShow);
//   });
// });