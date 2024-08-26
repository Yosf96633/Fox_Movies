import { createSlice } from "@reduxjs/toolkit";


const genre_slice = createSlice({
    name:"genre_slice",
    initialState:[],
    reducers:{
        add_genre: (state , action)=>{
             return [action.payload]
        }
    }
})

export const {add_genre} = genre_slice.actions;
export default genre_slice.reducer;
