import { createSlice } from "@reduxjs/toolkit";

const initialMovieState = {

  };
  
  const paymentSlice = createSlice({
    name: "payment",
    initialState: initialMovieState,
    reducers: {
    },
  });
  
  export const paymentAction = paymentSlice.actions;
  export default paymentSlice.reducer;
  