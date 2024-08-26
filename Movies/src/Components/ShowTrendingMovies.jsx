import React from 'react';
import { useSelector } from 'react-redux';
import ShowSingleData from './ShowSingleData';
import LoadingSpinner from './LoadingSpinner'; // Import the loading spinner component

function ShowTrendingMovies() {
  const trending_movies = useSelector((state) => state.trending_movies[0]);

  return (
    <div className="showTrendingMovies">
      {/* Check if trending_movies is undefined or empty */}
      {trending_movies ? (
        trending_movies.map((movie) => (
          <ShowSingleData
            poster_path={movie.poster_path}
            original_title={movie.original_title}
            release_date={movie.release_date} // Correcting the prop name
            key={movie.id}
          />
        ))
      ) : (
        <LoadingSpinner /> // Show a loading spinner if trending_movies is not loaded
      )}
    </div>
  );
}

export default ShowTrendingMovies;
