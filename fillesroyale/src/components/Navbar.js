// import React from 'react'
// import './Navbar.css'
// import logo from '../img/pinkLogo.png'
// // import newfavsymb from '../img/newfavsymb.png'
// import newShopBag from '../img/newShopBag.png'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <div className='fullNavbar'>


// <nav className="navbar navbar-expand bg-body-tertiary">
//   <div className="container-fluid">

//      {/* logo was here previously */}

//     {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button> */}

//     <div className="collapse navbar-collapse" id="navbarSupportedContent">



//       <div className='commonDiv'>

//       <Link className="navbar-brand" to="/"> 
//         <img src={logo} />
//         <div className='BrandName h1'> Filles Royale </div>
//      </Link>

//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// {/* 
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li> */}

//         <li className="nav-item dropdown">
//           <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Collage Wear
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="/basics">Basics</Link></li>
//             <li><Link className="dropdown-item" to="/Trendy">Trendy</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="/OldMoney">OldMoney</Link></li>
//           </ul>
//         </li>

//         <li className="nav-item dropdown" >
//           <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Hostal Wear
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="/Regular">Regular</Link></li>
//             <li><Link className="dropdown-item" to="/NightSuits">Night Suits</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="/LoungWear">Loung Wears</Link></li>
//           </ul>
//         </li>

//         <li className="nav-item dropdown">
//           <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Party Wear
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="/">Action</Link></li>
//             <li><Link className="dropdown-item" to="/">Another action</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="/">Something else here</Link></li>
//           </ul>
//         </li>

//         <li className="nav-item dropdown">
//           <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Beauty
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="/">Action</Link></li>
//             <li><Link className="dropdown-item" to="/">Another action</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="/">Something else here</Link></li>
//           </ul>
//         </li>

//          <div className='Logns'>

//          {/* <li><Link className="nav-link active" aria-current="page" to="/login">Login</Link></li> */}
//         <li><Link className="nav-link active" aria-current="page" to="/Register">Register</Link></li> 

//         </div> 


//       </ul>


//       </div>

 
       


//        <div className='searchEle'>

//        <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search for product" aria-label="Search"/>
//         <button className="btn btn-outline-dark" type="submit">Search</button>
//       </form>

//       </div>


//       <div className='Navicons'>
//            <div className="favorite">
//                {/* <img src={newfavsymb} alt="" /> */}
//             </div>
      
//             <div className="bagIcon">
//               {/* <i className="fas fa-shopping-bag"></i> */}
//               <img src={newShopBag} alt="" />
//             </div>
//       </div>
     
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }





import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/pinkLogo.png';
import newShopBag from '../img/newShopBag.png';
import '../components/Navbar.css';

export default function CollNavbar({ cartItems }) {
  return (
    <div className='fullNavbar'>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='commonDiv'>
              <Link className="navbar-brand" to="/">
                <img src={logo} />
                <div className='BrandName h1'> Filles Royale </div>
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collage Wear
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/basics">Basics</Link></li>
                    <li><Link className="dropdown-item" to="/Trendy">Trendy</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/OldMoney">OldMoney</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hostal Wear
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Regular">Regular</Link></li>
                    <li><Link className="dropdown-item" to="/NightSuits">Night Suits</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/LoungWear">Loung Wears</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Party Wear
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Beauty
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                  </ul>
                </li>
                <div className='Logns'>
                  <li><Link className="nav-link active" aria-current="page" to="/Register">Register</Link></li>
                </div>
              </ul>
            </div>

            <div className='searchEle'>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search for product" aria-label="Search" />
                <button className="btn btn-outline-dark" type="submit">Search</button>
              </form>
            </div>

            <div className='Navicons'>
              <div className="favorite"></div>
              <div className="bagIcon">

               {/* coping this link to all pages */}

               <Link aria-current="page" to="/CartBag">
               <img src={newShopBag} alt="Bag Icon" />
               {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
               </Link>


              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

