import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from "react-router-dom"
import { MainPage } from "./Pages"
import Herosection from "./Pages/Herosection"
import Genre from "./Pages/GenrePage"
import MoviesPage from "./Pages/MoviesPage"
import TvShowsPage from "./Pages/TvShowsPage"
import GenredetailPage from "./Pages/GenredetailPage"
import AboutUsPage from "./Pages/AboutUsPage"
import SearchPage from "./Pages/SearchPage"
function App() {
  const route = createBrowserRouter(createRoutesFromElements(<>
  <Route path="/" element={<MainPage/>}>
           <Route index element={<Herosection/>}/>
           <Route path="/movies" element={<MoviesPage/>}/>
           <Route path="/tvshows" element={<TvShowsPage/>}/>
           <Route path="/genre" element={<Genre/>}/>
           <Route path="/genre-detail" element={<GenredetailPage/>}/>
           <Route path="/about_us" element={<AboutUsPage/>}/>
           <Route path="/search" element={<SearchPage/>}/>
  </Route>
  </>))
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App