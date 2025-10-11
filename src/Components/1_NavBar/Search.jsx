import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
          <input type="search" className="form-control " onChange={(e)=>{setKeyword(e.target.value)}}  autoComplete='off' placeholder='Search...'/>
        <button className='btn btn-outline-success d-block d-lg-none' type='submit'  > <i className="bi bi-search text-dark"></i></button>
        <button className='btn btn-outline-success d-none d-lg-block' type='submit' > Search</button>
        </form>
    </div>
  )

}

export default Search