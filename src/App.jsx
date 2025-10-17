
import { Routes, Route,Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import NavBar from './Components/1_NavBar/NavBar.jsx'
import HomePage from './Components/2_HomePage/HomePage.jsx'
import Electronics from './Components/Electronics/Electronics.jsx'
import TVappliances from './Components/Tv_appliances/Tv_appliances.jsx'
import Furnitures from './Components/Furniture/Furniture.jsx'
import Sports from './Components/Sports/Sports.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import LoginPage from './Components/LoginPage/LoginPage.jsx' 
import Cart from './Components/Cart/Cart.jsx' 

const App = () => {

  const [cart,setCart] = useState(()=>{

    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(()=>{
    
    localStorage.setItem("cartItems", JSON.stringify(cart));
  },[cart])

  return (
    <>

      <NavBar/>

      <Routes>

          <Route path='/search' element={<HomePage/>}></Route>
          <Route path='/product/:id' element={<ProductDetails cart= {cart} setCart={setCart} />}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/electronics' element={<Electronics/>}></Route>
          <Route path='/tv_appliances' element={<TVappliances/>}></Route>
          <Route path='/furnitures' element={<Furnitures/>}></Route>
          <Route path='/sports' element={<Sports/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
      </Routes>
   
    

    </>
  )
}

export default App