import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../LoadingSpinner"
import { add_tv_shows } from "../../../Store/TvShows";
import ShowShows from "./ShowShows";

function TvShows() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loading , setLoading] = useState(true)
  async function fetchData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=b2694ea07e565727a4263d19271ce694&page=${page}`);
    const data = await response.json();
    console.log(data);
    
    dispatch(add_tv_shows(data.results));
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [page]);
  return <div className={loading?"movies_loading":"movies"}>
       {loading?<LoadingSpinner/>:<ShowShows page={page} setPage={setPage}/>}
  </div>;
}

export default TvShows;
