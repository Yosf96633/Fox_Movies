import React from 'react'
import {Link, useNavigate} from "react-router-dom"
function GenreCard({id , name}) {
    const navigate = useNavigate();
  return (
   <div className="genre_card" onClick={()=>{
    navigate(`/genre-detail?id=${id}&genre=${name}`)
   }}>
      {name}
   </div>
  )
}

export default GenreCard