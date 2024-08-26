import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
 function InputComponent() {
  const navigate = useNavigate();
  const [keyword , setkeyword ] = useState("");
  return (
    <div className="input_component">
            <h1>Welcome.</h1>
            <p>Millions of movies, TV shows and people to discover. Explore now.</p>
              <div className="input_div">
                <input type="text" placeholder='Search for a movies' value={keyword} onChange={(e)=>{setkeyword(e.target.value)}}/>
                <button style={{cursor:"pointer"}} onClick={()=>{
                    if(keyword.length!==0)
                      navigate(`/search?query=${keyword}`)
                }}>Search</button>
              </div>
    </div>
  )
}

export default InputComponent