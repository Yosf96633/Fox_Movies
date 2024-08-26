import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import {add_search_data} from "../../../Store/SearchData"
import ShowSearch from './ShowSearch';
import LoadingSpinner from "../LoadingSpinner"
function FetchSearch({query}) {
  const [max , setMax] = useState(0)
  const [page , setPage] = useState(1);
  const dispatch = useDispatch();
  const [loading , setLoading ] = useState(true);
  async function fetchdata() {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b2694ea07e565727a4263d19271ce694&query=${query}&page=${page}`)
    const data = await response.json();
    console.log(data);
    
    if(data.total_results!==0)
       {
        dispatch(add_search_data(data.results));
        setLoading(false)
        setMax(data.total_pages);
       }
  }
  useEffect(()=>{
      fetchdata()
  },[query , page])
  return (
    <div className="fetchSearch">
          {
              loading?<LoadingSpinner/>:<ShowSearch page={page} setPage={setPage} max={max}/>
          }
    </div>
  )
}

export default FetchSearch
