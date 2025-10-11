import React from 'react'
import { Routes, Route,Link } from 'react-router-dom'


import NavBar from './Components/1_NavBar/NavBar.jsx'
import HomePage from './Components/2_HomePage/HomePage.jsx'
import Electronics from './Components/Electronics/Electronics.jsx'
import TVappliances from './Components/TV_appliances/Tv_appliances.jsx'
import Furnitures from './Components/Furniture/Furniture.jsx'
import Sports from './Components/Sports/Sports.jsx'

const App = () => {

  return (
    <>

      <NavBar/>

      <Routes>
          <Route path='/search' element={<HomePage/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/electronics' element={<Electronics/>}></Route>
          <Route path='/tv_appliances' element={<TVappliances/>}></Route>
          <Route path='/furnitures' element={<Furnitures/>}></Route>
          <Route path='/sports' element={<Sports/>}></Route>
      </Routes>
   
    

    </>
  )
}

export default App