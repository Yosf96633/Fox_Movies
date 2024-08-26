import { createSlice } from "@reduxjs/toolkit";

const temp_slice = createSlice({
  name: "temp_slice",
  initialState: [],
  reducers: {
    add_genre_movies: (state, action) => {
      return [action.payload];
    },
  },
});

export const{add_genre_movies} = temp_slice.actions;
export default temp_slice.reducer; 
