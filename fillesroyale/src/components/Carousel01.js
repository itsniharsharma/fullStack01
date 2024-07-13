import React from 'react'
import car011 from '../img/car01img01.webp'
import car012 from '../img/car01img02.webp'
import car013 from '../img/newcar01img.webp'
import car014 from '../img/car01img04.jpeg'
import car015 from '../img/car01img05.webp'

export default function Carousel01() {
  return (
    <div className='carousel'>
        <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src={car011} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={car012} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={car013} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={car014} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={car015} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
