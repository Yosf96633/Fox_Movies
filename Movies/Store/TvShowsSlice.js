import { createSlice } from "@reduxjs/toolkit";

const trending_tv_shows = createSlice({
    name: "trending_tv_shows",
    initialState: [],
    reducers: {
        addTrendingTvShows: (state, action) => {
            return [action.payload];
        },
    },
});

export const { addTrendingTvShows } = trending_tv_shows.actions;
export default trending_tv_shows.reducer;
