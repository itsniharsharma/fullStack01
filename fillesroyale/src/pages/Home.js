import React, { useState, useEffect } from "react";
// import React from "react";
import Navbar from "../components/Navbar";
import Carousel01 from "../components/Carousel01";
import middleCarousel from "../img/BasicSampleCar.webp";
import sampleCardImg01 from "../img/sampleCardImg01.webp";
import sampleCardImg02 from "../img/sampleCardImg02.webp";
import blockSectionimg01 from "../img/blockSectionimg01.webp";
import blockSectionimg02 from "../img/blockSectionimg02.jpg";
import longCardsimg01 from "../img/longCardsimg01.webp";
import "../pages/Home.css";
import Footer from "../components/Footer";

export default function Home() {

//---------------------------------------------------------------------

const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

//----------------------------------------------------------------------


  //-------------------------------------------------------------------------
  const [text, setText] = useState("NOW IN TIET");
  const [fadeClass, setFadeClass] = useState("fadeIn");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade");
      setTimeout(() => {
        setText((prevText) =>
          prevText === "NOW IN TIET" ? "ONLY FOR GIRLS" : "NOW IN TIET"
        );
        setFadeClass("fadeIn");
      }, 500); // Match the duration of the CSS transition
    }, 2000); // Change every 2 seconds, including fade duration

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  //-------------------------------------------------------------------------



 


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel01 />
      </div>

      <div className="changingHeading">
        <i className={`h1 ${fadeClass}`}>{text}</i>
      </div>

      <div className="cardSection">
        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blockSection">

        <div className="fourblocks">
          <div className="twoSets">
            <div className="firstset">
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
            </div>

            <div className="secondset">
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
            </div>

            <div className="thirdset">
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
              <img src={blockSectionimg01} class="img-thumbnail" alt="..." />
            </div>
          </div>

          <div className="changingPicture">
            <img src={blockSectionimg02} alt="..." />
          </div>

        </div>
      </div>

      <div>
      </div>





        <div className="middleCarousel">
 
        <div id="carouselExampleSlidesOnly" className="carousel-custom" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={middleCarousel} className="d-block w-100" alt="OfferImages"/>
    </div>

    <div className="carousel-item active">
      <img src={middleCarousel} className="d-block w-100" alt="OfferImages"/>
    </div>

    <div className="carousel-item active">
      <img src={middleCarousel} className="d-block w-100" alt="OfferImages"/>
    </div>
  </div>
</div>

        </div>







      <div className="longCards">



      <div className="card" style={{ width: '18rem' }}>
      <img src={longCardsimg01} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>




    <div className="card" style={{ width: '18rem' }}>
      <img src={longCardsimg01} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>




    <div className="card" style={{ width: '18rem' }}>
      <img src={longCardsimg01} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>





    <div className="card" style={{ width: '18rem' }}>
      <img src={longCardsimg01} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>





      </div>









      <div className="imageCollection">

          

      </div>







      <div className="cardSection02">




       <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>



       

      </div>











      <div className="cardSection03">




       <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>



       

      </div>








      <div className="cardSection04">




       <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>



       

      </div>









      <div className="cardSection05">




       <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card02" style={{ width: "18rem" }}>
            <img src={sampleCardImg02} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card01" style={{ width: "18rem" }}>
            <img src={sampleCardImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>



       

      </div>







      
     
     <Footer/>
          
    </div>
  );
}
