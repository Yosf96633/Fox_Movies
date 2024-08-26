import React from 'react'
import { useSearchParams } from 'react-router-dom'
import FetchSearch from '../Components/Search/FetchSearch'

function SearchPage() {
  const [ params ]= useSearchParams()
  return (
    <div style={{backgroundColor:"#075693"}} className="search_page">
        <h1 style={{fontFamily:"sans-serif" , textAlign:"center", paddingTop:"3rem" , textTransform:"uppercase"}}>Searched: {params.get("query")}</h1>
        <FetchSearch query={params.get("query")}/>
    </div>
  )
}

export default SearchPage