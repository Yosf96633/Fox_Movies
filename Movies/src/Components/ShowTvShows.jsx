import React from 'react';
import { useSelector } from 'react-redux';
import ShowSingleData from './ShowSingleData';
import LoadingSpinner from './LoadingSpinner'; // Import the loading spinner component
import ShowSingleTVdata from './ShowSingleTVdata';

function ShowTrendingMovies() {
  const trending_shows = useSelector((state) => {
  return state.trending_shows[0];
}
);

  return (
    <div className="showTrendingMovies">
      {/* Check if trending_movies is undefined or empty */}
      {trending_shows ? (
        trending_shows.map((show) => (
          <ShowSingleTVdata
          key={show.id}
            poster_path={show.poster_path}
            original_name={show.original_name}
            first_air_date={show.first_air_date}
          />
        ))
      ) : (
        <LoadingSpinner /> // Show a loading spinner if trending_movies is not loaded
      )}
    </div>
  );
}

export default ShowTrendingMovies;
