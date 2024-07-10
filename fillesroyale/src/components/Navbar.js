import React from 'react'
import './Navbar.css'
import logo from '../img/newShortLogoTop.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='fullNavbar'>

<nav className="navbar navbar-expand bg-body-tertiary">
  <div className="container-fluid">

     {/* logo was here previously */}

    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

    <div className="collapse navbar-collapse" id="navbarSupportedContent">



      <div className='commonDiv'>

      <Link className="navbar-brand" to="/"> 
        <img src={logo} />
        <div className='BrandName'> Filles Royale </div>
     </Link>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
{/* 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li> */}

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Collage Wear
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
            Hostal Wear
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

        <Link class="nav-link active" aria-current="page" to="#">Login</Link>
        <Link class="nav-link active" aria-current="page" to="#">SignUp</Link>

        </div>


      </ul>


      </div>

 
       


       <div className='searchEle'>

       <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search for product" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>

      
            <div className="bagIcon">
              <i className="fas fa-shopping-bag"></i>
            </div>

      </div>
     
    </div>
  </div>
</nav>

    </div>
  )
}
