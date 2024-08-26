import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../../Store/Slices";
import LoadingSpinner from "./LoadingSpinner";
import ShowTrendingMovies from "./ShowTrendingMovies";

function ShowTrending() {
  const [loading, setLoading] = useState(true);
  const [isToday, setIsToday] = useState(true);

  const handleToggle = () => {
    setIsToday(!isToday);
  };
  const dispatch = useDispatch();

  async function fetchWeekdata() {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=b2694ea07e565727a4263d19271ce694"
    );
    const data = await response.json();
    setLoading(false);
    dispatch(addTrendingMovies(data.results));
  }
  async function fetchTodaydata() {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b2694ea07e565727a4263d19271ce694"
    );
    const data = await response.json();
    setLoading(false);
    dispatch(addTrendingMovies(data.results));
  }
  useEffect(() => {
    {isToday? fetchTodaydata() : fetchWeekdata()}

  },[isToday]);

  return (
    <div className="trending_movies">
      <div className="toggle">
      <h2 style={{ fontFamily: "sans-serif", marginBottom:"1rem", paddingLeft:"0.7rem"}}>
        Trending Movies
      </h2>
      <div className="toggle-container">
      <button
        className={`toggle-btn ${isToday ? 'active' : ''}`}
        onClick={handleToggle}
      >
        Today
      </button>
      <button
        className={`toggle-btn ${!isToday ? 'active' : ''}`}
        onClick={handleToggle}
      >
        Week
      </button>
    </div>
      </div>
      <div className={loading?"loading":"loading_none"}><LoadingSpinner /></div>
      <div className={loading?"":"show_trending_movies"}>
       <ShowTrendingMovies />
      </div>
    </div>
  );
}

export default ShowTrending;
