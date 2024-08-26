import React from 'react';

function ShowSingleTVdata({ poster_path, original_name ,  first_air_date }) {
  return (
    <div className="movie-card">
      <img style={{borderRadius:"1rem"}} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_name} />
      <h4 style={{textAlign:"center " , fontFamily:"sans-serif"}}>{original_name}</h4>
      <p  style={{textAlign:"center"}}>{first_air_date}</p>
    </div>
  );
}

export default ShowSingleTVdata;
