import React from 'react'
import { Footer, Header } from '../Components'
import { Outlet } from 'react-router' 
function MainPage() {
  return (
     <div className="main_page">
         <Header/>
        <div className="container">
             <Outlet/>
        </div>
        <Footer/>
     </div>
  )
}

export default MainPage