import React from 'react'

function ShowSingleShow({original_name , popularity , poster_path , first_air_date}) {
  return (
    <div className='showSingleMovies'>
    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_name} />
    <h2>{original_name}</h2>
    <p>Having Popularity of {popularity}</p>
    <p>{first_air_date}</p>

</div>
  )
}

export default ShowSingleShow