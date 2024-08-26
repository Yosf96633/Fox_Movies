
import { createSlice } from "@reduxjs/toolkit"

const Movies_slice = createSlice({
    name:"Movies_Slice",
    initialState:[],
    reducers:{
        add_movies:(state , action)=>{
              return [action.payload]
        }
    }
})


export default Movies_slice.reducer;
export const {add_movies} = Movies_slice.actions;