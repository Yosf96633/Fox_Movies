import React from 'react'
import { useSelector } from 'react-redux'
import ShowSingleSearch from './ShowSingleSearch';

function ShowSearch({page , setPage , max}) {
    const searched_data  =useSelector(state=>{
        return(state.searchdata[0]);
        
    })
  return (
    <>
   <div className="ShowSearch">
        {
            searched_data.map((sd)=><ShowSingleSearch
            title={sd.original_title}
            poster={sd.poster_path?sd.poster_path:null}
            release_date={sd.release_date}
            key={sd.id}
            />)
        }
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
     onClick={(prev) => {
          setPage((prev) => {
            if(prev<max)
                return prev+1;
            else
            prev;
          });
       window.scrollTo({ top: 0, behavior: "smooth" });
     }}
   >
     Next
   </button>
 </div></>
  )
}

export default ShowSearch