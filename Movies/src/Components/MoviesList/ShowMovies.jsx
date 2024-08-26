import React from "react";
import { useSelector } from "react-redux";
import ShowSingleMovie from "./ShowSingleMovie";

function ShowMovies({ page, setPage }) {
  const movies = useSelector((state) => {
    return state.movies[0];
  });
  return (
    <><h1 style={{fontFamily:"sans-serif" , textAlign:"center", paddingTop:"3rem"}}>Best Movies</h1>
    <div className="Showmovies">
      {movies.map((movie) => (
        <ShowSingleMovie
          genre_ids={movie.genre_ids}
          original_title={movie.original_title}
          popularity={movie.popularity}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          key={movie.id}
        />
      ))}
    </div>
    <div className="btn">
    <button
      onClick={() => {
        setPage((prev) => {
          if (prev > 1) return prev - 1;
          else return prev;
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Prev
    </button>
    <p>Page No#{page}</p>
    <button
      onClick={() => {
        setPage((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Next
    </button>
  </div></>
  );
}

export default ShowMovies;
