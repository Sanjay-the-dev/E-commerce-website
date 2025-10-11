import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
import Logo from '../../assets/NavBar-assets/Brand_icon.png'

const NavBar = () => {
  const closeNav =()=>{
    document.getElementById("navbar-button").click();
  }
  return (
     <div className="navbar navbar-expand-lg  bg-body-tertiary position-relative">
      <div className="container-fluid E-bg-navbar">
        <h2 className="navbar-brand  " > <img src={Logo} alt="Brand icon" width={40} />Online Shoping</h2>
        
      <div className="d-none d-sm-block d-lg-none">
      <Search/>
      </div>
        
        <button className="navbar-toggler" id='navbar-button' type='button' data-bs-toggle="collapse" data-bs-target="#navItems">
          <span className="navbar-toggler-icon" ></span>
        </button>

      <div className="d-block d-sm-none  d-lg-none">
      <Search/>
      </div>

        <div className="collapse navbar-collapse  " id='navItems'>
          <ul className="navbar-nav">
            <li className="nav-items E-border-nav-items ">
              <Link className='nav-link' to="/home" onClick={closeNav}>Home </Link>
            </li>
            <li className="nav-items E-border-nav-items">
              <Link className='nav-link' to="/electronics" onClick={closeNav}>Electronics </Link>
            </li>
            <li className="nav-items E-border-nav-items">
              <Link className='nav-link' to="/tv_appliances" onClick={closeNav}>TV & Appliances </Link>
            </li>
            <li className="nav-items E-border-nav-items">
              <Link className='nav-link' to="/furnitures" onClick={closeNav}>Furnitures </Link>
            </li>
            <li className="nav-items ">
              <Link className='nav-link' to="/sports" onClick={closeNav}>Sports & More</Link>
            </li>
          </ul>
        </div>

      <div className="d-none d-lg-block">
      <Search/>
      </div>

        

      </div>
     </div>
  
  )
}

export default NavBar;