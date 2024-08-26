import React from 'react'

function NotFound() {
  return (
    <div style={{height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#025896"
    }} className="notFound">
      <h1 className='gradient-text'>Nothing found..!</h1>
    </div>
  )
}

export default NotFound