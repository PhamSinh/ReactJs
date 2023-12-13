import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie-slice";
import movieDetailSlice from "./movie-detail-slice";
import paymentSlice from "./payment-slice";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../saga/rootSage";

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: movieSlice,
    detail: movieDetailSlice,
    payment: paymentSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
