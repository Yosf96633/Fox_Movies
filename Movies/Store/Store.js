import { configureStore } from "@reduxjs/toolkit"
import trending_movies_reducer from "./Slices"
import trending_tv_shows from "./TvShowsSlice"
import genre_reducer from "./GenreSlice"
import temp_reducer from "./TempSlice"
import movies_reducer from "./Movies"
import tvShowReducer from "./TvShows"
import search_reducer from "./SearchData"
import Upcoming_reducer from "./Upcoming"
export const store = configureStore({
    reducer:{
        trending_movies:  trending_movies_reducer, 
        trending_shows: trending_tv_shows,
        genre: genre_reducer,
        temp:  temp_reducer,
        movies : movies_reducer,
        tvShows: tvShowReducer,
        searchdata: search_reducer,
        upcomingData: Upcoming_reducer,
    }
})