import React from "react";
import { useSelector } from "react-redux";
import ShowSingleShow from "./ShowSingleShow";

function ShowShows({ page, setPage }) {
  const tvShows = useSelector((state) => {
    return state.tvShows[0];
  });
  return (
    <><h1 style={{fontFamily:"sans-serif" , textAlign:"center", paddingTop:"3rem"}}>Best Tv Shows</h1>
    <div className="Showmovies">
      {tvShows.map((ts) => (
        <ShowSingleShow
          original_name={ts.original_name}
          popularity={ts.popularity}
          poster_path={ts.poster_path}
          first_air_date={ts.first_air_date}
          key={ts.id}
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

export default ShowShows;
