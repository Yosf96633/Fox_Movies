
import { createSlice } from "@reduxjs/toolkit"
const SearchData = createSlice({
    name:"SearchData",
    initialState:[],
    reducers:{
        add_search_data:(state , action)=>{
            return [action.payload];
        }
    }
})

export default SearchData.reducer;
export const {add_search_data} = SearchData.actions;