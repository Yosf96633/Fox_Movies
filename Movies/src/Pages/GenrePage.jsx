import React from "react";
import { Genre } from "../Components";
function GenrePage() {
  return (
    <div className="genre_page">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize:"3rem",
        }}
      >
        <span style={{color:"red"}}>G</span>
        <span style={{color:"blue"}}>E</span>
        <span style={{color:"orange"}}>N</span>
        <span style={{color:"yellow"}}>R</span>
        <span style={{color:"#04639E"}}>E</span>
        <span style={{color:"purple"}}>S</span>
      </h1>
      <Genre />
    </div>
  );
}

export default GenrePage;
