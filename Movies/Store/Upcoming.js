
import {createSlice} from "@reduxjs/toolkit"

const upcoming = createSlice({
    name:"Upcoming",
    initialState:[],
    reducers:{
        add_upcoming:(state , action)=>{
            return [action.payload];
        }
    }
})

export default upcoming.reducer;
export const {add_upcoming} = upcoming.actions;