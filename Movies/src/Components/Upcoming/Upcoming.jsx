import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add_upcoming } from "../../../Store/Upcoming";
import Loading_spinner from "../LoadingSpinner"
import Carousel from "./Carousel";
function Upcoming() {
  const [isLoading , setIsLoading] = useState(true);
  const dispatch = useDispatch();
  async function fetchData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b2694ea07e565727a4263d19271ce694&page=1`
    );
    const data = await response.json();
    console.log(data.results);
    dispatch(add_upcoming(data.results));
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div className={isLoading?"Loading_up_coming":"up_coming"}>
      <h1 style={{textAlign:"center" , fontFamily:"sans-serif" , padding:"1.5rem 0" , color:"white"}}>Latest Movies</h1>
      {isLoading? <Loading_spinner/> : <Carousel/>}
  </div>;
}

export default Upcoming;
