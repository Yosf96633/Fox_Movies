import React from 'react'

function ShowSingleMovieGenre({original_title , popularity , poster_path , release_date}) {
  return (
    <div className='ShowSingleMovieGenre'>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
        <h3>{original_title}</h3>
        <p>Having Popularity of {popularity}</p>
        <p>{release_date}</p>
    </div>
  )
}

export default ShowSingleMovieGenre