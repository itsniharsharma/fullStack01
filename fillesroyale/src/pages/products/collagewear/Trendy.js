import React from 'react'
import CollNavbar from '../collagewear/CollNavbar.js';
import '../collagewear/CollagewearCSS/Trendy.css';
import OfferCarousalForTrendy from '../collagewear/CollagewearCSS/CollageWearImgs/OfferCarousalTrendy.webp';

export default function Trendy() {
  return (
    <div>



<CollNavbar />



<div id="carouselExampleSlidesOnly" className="carousel-custom" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={OfferCarousalForTrendy} className="d-block w-100" alt="OfferImages"/>
    </div>
    <div className="carousel-item">
      <img src={OfferCarousalForTrendy} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={OfferCarousalForTrendy} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>




<div className="container py-5">
  <div className="row">
    <div className="col-lg-6">
      <div id="productCarousel" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="http://via.placeholder.com/640x360.png" className="d-block w-100 custom-carousel-img" alt="image-slider-1" />
          </div>
          <div className="carousel-item">
            <img src="http://via.placeholder.com/640x360.png" className="d-block w-100 custom-carousel-img" alt="image-slider-2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <div className="col-lg-6">
      <h2 className="fw-bold">Product Name</h2>
      <p className="text-muted">Product Category</p>
      <h3 className="my-4">$99.99</h3>
      <p className="mb-4">
        This is a detailed description of the product. It provides all necessary
        information about the features, benefits, and specifications of the
        product.
      </p>
      <div className="d-flex gap-3 mb-4">
        <input type="number" className="form-control" value="1" style={{ maxWidth: '80px' }} />
        <button className="btn btn-primary" type="button">Add to Cart</button>
      </div>
      <div>
        <button className="btn btn-outline-secondary btn-sm" type="button">Add to Wishlist</button>
        <button className="btn btn-outline-secondary btn-sm" type="button">Compare</button>
      </div>
    </div>
  </div>
</div>


  
<div className="container py-5">
  <div className="row">
    <div className="col-lg-6">
      <div id="productCarousel" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="http://via.placeholder.com/640x360.png" className="d-block w-100 custom-carousel-img" alt="image-slider-1" />
          </div>
          <div className="carousel-item">
            <img src="http://via.placeholder.com/640x360.png" className="d-block w-100 custom-carousel-img" alt="image-slider-2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <div className="col-lg-6">
      <h2 className="fw-bold">Product Name</h2>
      <p className="text-muted">Product Category</p>
      <h3 className="my-4">$99.99</h3>
      <p className="mb-4">
        This is a detailed description of the product. It provides all necessary
        information about the features, benefits, and specifications of the
        product.
      </p>
      <div className="d-flex gap-3 mb-4">
        <input type="number" className="form-control" value="1" style={{ maxWidth: '80px' }} />
        <button className="btn btn-primary" type="button">Add to Cart</button>
      </div>
      <div>
        <button className="btn btn-outline-secondary btn-sm" type="button">Add to Wishlist</button>
        <button className="btn btn-outline-secondary btn-sm" type="button">Compare</button>
      </div>
    </div>
  </div>
</div>





<div className="container py-5">
  <div className="row">
    <div className="col-lg-6">
      <div id="productCarousel" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="http://via.placeholder.com/640x360.png" className="d-block w-100 custom-carousel-img" alt="image-slider-1" />
          </div>
          <div className="carousel-item">
            <img src="http://via.placeholder.com/640x360.png" className="d-block w-100 custom-carousel-img" alt="image-slider-2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <div className="col-lg-6">
      <h2 className="fw-bold">Product Name</h2>
      <p className="text-muted">Product Category</p>
      <h3 className="my-4">$99.99</h3>
      <p className="mb-4">
        This is a detailed description of the product. It provides all necessary
        information about the features, benefits, and specifications of the
        product.
      </p>
      <div className="d-flex gap-3 mb-4">
        <input type="number" className="form-control" value="1" style={{ maxWidth: '80px' }} />
        <button className="btn btn-primary" type="button">Add to Cart</button>
      </div>
      <div>
        <button className="btn btn-outline-secondary btn-sm" type="button">Add to Wishlist</button>
        <button className="btn btn-outline-secondary btn-sm" type="button">Compare</button>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
