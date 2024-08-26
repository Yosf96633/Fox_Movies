import React from "react";
import { useSelector } from "react-redux";
import ShowSingleMovieGenre from "./ShowSingleMovieGenre";

function ShowMoviesGenre({genre , page , setPage }) {
  const genre_movies = useSelector((state) => {
    return state.temp[0];
  });
  return (
   <>
   <h1  style={{fontFamily:"sans-serif" , textAlign:"center", paddingTop:"3rem"}}>{genre} Movies</h1>
    <div className="showMoviesGenre">
      {genre_movies.map((gm) => {
        return (
          <ShowSingleMovieGenre
            original_title={gm.original_title}
            popularity={gm.popularity}
            poster_path={gm.poster_path}
            release_date={gm.release_date}
            setPage={setPage}
            key={gm.id}
          />
        );
      })}
    </div>
    <div className="btn">
        <button onClick={()=>{
           setPage(prev=>{
            if(prev>1)
                return prev-1;
            else 
            return prev
           })
            window.scrollTo({top:0 , behavior:"smooth"})
        }}>Prev</button>
        <p>Page No#{page}</p><button onClick={()=>{
            setPage(prev=>prev+1)
            window.scrollTo({top:0 , behavior:"smooth"})
        }}>Next</button>
    </div>
   </>
  );
}

export default ShowMoviesGenre;
