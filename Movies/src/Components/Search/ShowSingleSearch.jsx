import React from 'react'
import img from "../../../public/no_img.jpg"
function ShowSingleSearch({title , poster , release_date}) {
  return (
    <div className="ShowSingleSearch">
        {poster?<img  src={`https://image.tmdb.org/t/p/w500${poster}`} />:<img src={img}/>}
        <h3>{title}</h3>
        <p>{release_date}</p>
    </div>
  )
}

export default ShowSingleSearch