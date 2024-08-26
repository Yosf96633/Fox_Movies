import { createSlice } from "@reduxjs/toolkit";

const trending_movies = createSlice({
    name: "trending_Movies",
    initialState: [],
    reducers: {
        addTrendingMovies: (state, action) => {
            return [action.payload];
        },
    },
});

export const { addTrendingMovies } = trending_movies.actions;
export default trending_movies.reducer;
