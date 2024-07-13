
import React, {useState, useEffect} from 'react'; 
// import React from "react";
import Navbar from "../components/Navbar";
import Carousel01 from "../components/Carousel01";
import sampleCardImg01 from "../img/sampleCardImg01.webp"
import '../pages/Home.css'

export default function Home() {

//-------------------------------------------------------------------------
  const [text, setText] = useState('NOW IN TIET');
  const [fadeClass, setFadeClass] = useState('fadeIn');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade');
      setTimeout(() => {
        setText(prevText => (prevText === 'NOW IN TIET' ? 'ONLY FOR GIRLS' : 'NOW IN TIET'));
        setFadeClass('fadeIn');
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


    <div className='changingHeading'>
         <i className={`h1 ${fadeClass}`}>{text}</i>
    </div>



      <div className='cardSection'>
       
     <div>
      <div className="card01" style={{ width: '18rem' }}>
        <img src={sampleCardImg01} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>


    <div>
      <div className="card02" style={{ width: '18rem' }}>
        <img src={sampleCardImg01} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>


    <div>
      <div className="card01" style={{ width: '18rem' }}>
        <img src={sampleCardImg01} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>


    <div>
      <div className="card02" style={{ width: '18rem' }}>
        <img src={sampleCardImg01} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>


    
    <div>
      <div className="card01" style={{ width: '18rem' }}>
        <img src={sampleCardImg01} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>




     </div>










    </div>
  );
}
