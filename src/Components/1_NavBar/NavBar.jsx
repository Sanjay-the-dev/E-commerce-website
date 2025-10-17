import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
import Logo from '../../assets/NavBar-assets/Brand_icon.png'
import CartIcon from '../../assets/NavBar-assets/shopping-cart.png'


const NavBar = () => {

  const closeNav =()=>{
    
    const btn = document.getElementById("navbar-button");
    if(btn && btn.offsetParent !==null){
      btn.click();
    }
  }
  return (
     <div className="navbar navbar-expand-xl  bg-body-tertiary position-relative">
      <div className="container-fluid E-bg-navbar">
        
        {/* brand icon */}
        <Link className='nav-link' to='/home' onClick={closeNav}>
        <h2 className="navbar-brand " > <img src={Logo} alt="Brand icon" width={40} />Online Shoping</h2>
        </Link>

      <div className="d-flex d-none d-sm-block d-xl-none  flex-row ">
      <Search/>
      </div>

        {/* cart icon for small screen */}

        
        <div className="d-block me-1 d-flex">

        <Link to="/cart" className='nav-link' > 
        <button className='btn p-0 d-lg-none'  > <img src={CartIcon} alt=""  width={"35px"}/></button>
        </Link>

        <button className="navbar-toggler" id='navbar-button' type='button' data-bs-toggle="collapse" data-bs-target="#navItems">
          <span className="navbar-toggler-icon" ></span>
        </button>
        </div>

      <div className="d-block d-sm-none  d-xl-none">
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

      <div className="d-none d-xl-block">
      <Search/>
      </div>


        

      </div>
     </div>
  
  )
}

export default NavBar;