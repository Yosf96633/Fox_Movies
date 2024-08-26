import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import ShowTvShows from "./ShowTvShows";
import addtrending_tv_shows, { addTrendingTvShows }  from "../../Store/TvShowsSlice";

function TrendingTvShows() {
  const [loading, setLoading] = useState(true);
  const [isToday, setIsToday] = useState(true);

  const handleToggle = () => {
    setIsToday(!isToday);
  };
  const dispatch = useDispatch();

  async function fetchWeekdata() {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=b2694ea07e565727a4263d19271ce694"
    );
    const data = await response.json();
    console.log(data);
    
    setLoading(false);
    dispatch(addTrendingTvShows(data.results));
  }
  async function fetchTodaydata() {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=b2694ea07e565727a4263d19271ce694"
    );
    const data = await response.json();
    setLoading(false);
    dispatch(addTrendingTvShows(data.results));
  }
  useEffect(() => {
    {
      isToday ? fetchTodaydata() : fetchWeekdata();
    }
  }, [isToday]);

  return (
    <div className="trending_movies">
      <div className="toggle">
        <h2
          style={{
            fontFamily: "sans-serif",
            marginBottom: "1rem",
            paddingLeft: "0.7rem",
          }}
        >
          Trending TV Shows
        </h2>
        <div className="toggle-container">
          <button
            className={`toggle-btn ${isToday ? "active" : ""}`}
            onClick={handleToggle}
          >
            Today
          </button>
          <button
            className={`toggle-btn ${!isToday ? "active" : ""}`}
            onClick={handleToggle}
          >
            Week
          </button>
        </div>
      </div>
      <div className={loading ? "loading" : "loading_none"}>
        <LoadingSpinner />
      </div>
      <div className={loading ? "" : "show_trending_movies"}>
         <ShowTvShows/>
      </div>
    </div>
  );
}

export default TrendingTvShows;
