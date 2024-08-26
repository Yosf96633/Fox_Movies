import {createSlice} from "@reduxjs/toolkit"

const tvShows = createSlice({
    name:"Tv_Shows",
    initialState:[],
    reducers:{
        add_tv_shows:(state , action)=>{
            return [action.payload];
        }
    }
})

export default tvShows.reducer;
export const {add_tv_shows} = tvShows.actions; 