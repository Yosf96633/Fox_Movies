import {useEffect , useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import LoadingSpinner from '../LoadingSpinner';
import { add_genre_movies } from '../../../Store/TempSlice';
import ShowMoviesGenre from './ShowMoviesGenre';
function GenreDetail() {
    const [page , setPage] = useState(1)
    const [params] = useSearchParams();
    const dispatch = useDispatch();
    const [loading , setLoading] = useState(true);
  async function fetchData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=b2694ea07e565727a4263d19271ce694&with_genres=${params.get("id")}&page=${page}`
    );
    const data = await response.json();
    setPage(data.page)
    dispatch(add_genre_movies(data.results))
    setLoading(false)
  }
  useEffect(() => {
        fetchData();
  }, [page]);

  return( <div className={loading?"movies_loading":"m_genre"}>
          {loading?<LoadingSpinner/>:<ShowMoviesGenre genre={params.get("genre")} page={page} setPage={setPage}/>}
    </div>)
}

export default GenreDetail