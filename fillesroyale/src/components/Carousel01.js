import React from 'react'
import car011 from '../img/car01img01.webp'
import car012 from '../img/car01img02.webp'
import car013 from '../img/newcar01img.webp'

export default function Carousel01() {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={car011} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={car012} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car013} className="d-block w-100" alt="..."/>
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