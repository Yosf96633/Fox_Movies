import React from 'react'
import InputComponent from '../Components/InputComponent'
import ShowTrending from '../Components/ShowTrending'
import TrendingTvShows from '../Components/TrendingTvShows'
import Upcoming from '../Components/Upcoming/Upcoming'

function Herosection() {
  return (
      <>
          <InputComponent/>
          <Upcoming/>
          <ShowTrending/>
          <TrendingTvShows/>
      </> 
  )
}

export default Herosection