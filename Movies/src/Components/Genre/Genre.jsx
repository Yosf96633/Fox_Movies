import {React , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add_genre} from "../../../Store/GenreSlice"
import GenreCard from './GenreCard';
import LoadingSpinner from "../LoadingSpinner"
function Genre() {
   const genre =  useSelector((state)=>{
        return state.genre[0];
    })
    const dispatch = useDispatch();
    async function fetchData() {
      const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b2694ea07e565727a4263d19271ce694")
      const data = await response.json();
      dispatch(add_genre(data.genres));
    }
    useEffect(()=>{
      fetchData ();
    },[])
  return (
       <div className={genre?"genre":"loading"}>
        {genre ? genre.map(gen=><GenreCard id={gen.id} name={gen.name} key={gen.id}/>):<LoadingSpinner/>}
       </div>
  )
}

export default Genre