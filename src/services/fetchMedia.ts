import { MediaItemType } from "./MediaType.model";

import dataMovie from "../../public/data-demo.json"

const getMovies = () => {
  // const db = getFirestore(app);
  // const movies = collection(db, 'movies');
  // const moviesSnapshot = await getDocs(movies);
  // const moviesList = moviesSnapshot.docs.map(doc => {
  //   return {
  //     id: doc.id,
  //     ...doc.data()
  //   }
  // });

  // const moviesList = data.slice(0, 6);
  return dataMovie;
};

const getTrendingMovies = () => {
  // const db = getFirestore(app);
  // const trendingMovies = query(collection(db, 'movies'), where("isTrending", "==", true));
  // const moviesSnapshot = await getDocs(trendingMovies);
  // const moviesList = moviesSnapshot.docs.map(doc => {
  //   return {
  //     id: doc.id,
  //     ...doc.data()
  //   }
  // });
  // const moviesList = data.slice(0,4);
  return dataMovie.filter(movie => movie.isTrending);
};

const getMovieDetail = (id: string): MediaItemType => {
  // const db = getFirestore(app);
  // const collectionRef = collection(db, 'movies');
  // const documentRef = doc(collectionRef, id);
  // const documentSnapshot = await getDoc(documentRef);
  // const MovieDetailData = {
  //   id,
  //   ...documentSnapshot.data()
  // };
  return dataMovie.filter(movie => movie.id == id)[0] as MediaItemType;
}

export {
  getMovies, getTrendingMovies, getMovieDetail
};
