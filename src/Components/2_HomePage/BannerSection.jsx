import React, { useState } from 'react'
import { useEffect } from 'react'
//import slide_1 from 'src/assets/BannerSlides/S1.jpg';
import Slide_1 from '../../assets/BannerSlides/1.jpg'
import Slide_2 from '../../assets/BannerSlides/2.jpg'
import Slide_3 from '../../assets/BannerSlides/3.jpg'
import Slide_4 from '../../assets/BannerSlides/4.jpg'
import Slide_5 from '../../assets/BannerSlides/5.jpg'
import Slide_S1 from '../../assets/BannerSlides/S1.jpg'
import Slide_S2 from '../../assets/BannerSlides/S2.jpg'
import Slide_S3 from '../../assets/BannerSlides/S3.jpg'
import Slide_S4 from '../../assets/BannerSlides/S4.jpg'
import Slide_S5 from '../../assets/BannerSlides/S5.jpg'



const BannerSection = () => {

  
  const [mobileView,setMobileView] = useState()

useEffect(()=>{

  const screenWidth =()=>{
  if(window.innerWidth > 768){
     setMobileView(true);
  }
  else{
    setMobileView(false)
  }
  }

  screenWidth();

  window.addEventListener("resize",screenWidth)

  return window.addEventListener("resize",screenWidth) 

},[])


  useEffect(()=>{
 
    setTimeout(() => {
      document.getElementById("TheNext").click();
    }, 3000);

  },[])
  return (
  <div>
    <div id="BannerSlides" className="carousel slide  mx-auto mt-3" style={{width: "80vw"}} data-bs-ride="carousel" data-bs-interval="4000">
   <div className="carousel-indicators ">
    <button type="button"  data-bs-target="#BannerSlides" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button"  data-bs-target="#BannerSlides" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button"  data-bs-target="#BannerSlides" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type='button'  data-bs-target="#BannerSlides" data-bs-slide-to="3" aria-label='Slide 4'></button>
    <button type='button'  data-bs-target="#BannerSlides" data-bs-slide-to="4" aria-label='Slide 5'></button>
   </div>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src= {mobileView?Slide_1:Slide_S1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" >
      <img src={mobileView?Slide_2:Slide_S2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" >
      <img src={mobileView?Slide_3:Slide_S3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" >
      <img src={mobileView?Slide_4:Slide_S4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" >
      <img src={mobileView?Slide_5:Slide_S5} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#BannerSlides" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#BannerSlides" data-bs-slide="next" id='TheNext'>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    


  )

  
}

export default BannerSection