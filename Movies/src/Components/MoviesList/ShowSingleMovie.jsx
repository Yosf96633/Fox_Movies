import React from 'react'

function ShowSingleMovie({original_title, popularity , poster_path , release_date}) {
  return (
    <div className='showSingleMovies'>
         <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
         <h2>{original_title}</h2>
         <p>Having Popularity of {popularity}</p>
         <p>{release_date}</p>
    </div>
  )
}

export default ShowSingleMovie