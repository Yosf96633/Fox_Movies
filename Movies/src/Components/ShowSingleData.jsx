import React from 'react';

function ShowSingleData({ poster_path, original_title, release_date }) {
  return (
    <div className="movie-card">
      <img style={{borderRadius:"1rem"}} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
      <h4 style={{textAlign:"center " , fontFamily:"sans-serif"}}>{original_title}</h4>
      <p  style={{textAlign:"center"}}>{release_date}</p>
    </div>
  );
}

export default ShowSingleData;
