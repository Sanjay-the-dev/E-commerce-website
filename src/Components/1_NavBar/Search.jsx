import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartIcon from '../../assets/NavBar-assets/shopping-cart.png'
import { Link } from 'react-router-dom'


const Search = () => {

  const [keyword,setKeyword]= useState();

  const nav = useNavigate();
  
  const SearchHandler = (event)=>{

    console.log(event)
    event.preventDefault();
    nav('/search?keyword='+keyword)

  }

  


  return (
    <div id='E-search-input'>
        <form  className="d-flex gap-3 me-lg-5 E-form " role='search' onSubmit={SearchHandler}>

        <input type="search" className="form-control " style={{textDecoration:"none"}} onChange={(e)=>{setKeyword(e.target.value)}}  autoComplete='off' placeholder='Search...'/>

        <button className='btn btn-outline-success d-block d-lg-none' type='submit' id='E-Search-Search-Btn' > <i className="bi bi-search text-dark"></i></button>

        <button className='btn btn-outline-success d-none d-lg-block' type='submit' id='E-Search-Search-Btn' ><i className="bi bi-search text-dark"></i> </button>

{/*         cart icon */}
        <Link to={'/cart'} className='nav-link' style={{textDecoration:"none"}}>
        <button className='btn p-0 d-none d-lg-flex align-items-center ' id='E-Search-Search-Btn' type='button' > <img src={CartIcon} alt=""  width={"35px"}/> <span className="d-none d-xl-block ms-1 fs-5"> Cart</span>  </button>
        </Link>
        <Link to={'/login'} className='nav-link' style={{textDecoration:"none"}}>
        <button className='btn btn-primary ' id='E-Search-Login-Btn' type='button'>Login</button>
        </Link>
        </form>
    </div>
  )

}

export default Search