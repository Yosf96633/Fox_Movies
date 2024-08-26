import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add_movies } from "../../../Store/Movies";
import LoadingSpinner from "../LoadingSpinner"
import ShowMovies from "./ShowMovies";

function Movies() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loading , setLoading] = useState(true)
  async function fetchData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=b2694ea07e565727a4263d19271ce694&page=${page}`);
    const data = await response.json();
    dispatch(add_movies(data.results));
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [page]);
  return <div className={loading?"movies_loading":"movies"}>
       {loading?<LoadingSpinner/>:<ShowMovies page={page} setPage={setPage}/>}
  </div>;
}

export default Movies;
