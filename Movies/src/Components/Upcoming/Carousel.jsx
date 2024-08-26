import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
function Carousel() {
   const carousel_data =  useSelector((state)=>{
        return(state.upcomingData[0]);
    })
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
  return (
   <div className="Slider">
      <Slider {...settings}>
          {
            carousel_data.map(data=><div className='slide' key={data.id}>
               <div className="slide_container">
               <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.original_title} />
                <h2>{data.original_title}</h2>
                <p>{data.release_date}</p>
               </div>
            </div>)
          }
      </Slider>
      
   </div>
  )
}

export default Carousel