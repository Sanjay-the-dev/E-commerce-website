import React from 'react'
import "./ProductDetails.css"
import StarIcon from '../../assets/newStar.png'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ToastContainer, Toast } from 'react-bootstrap';


const ProductDetails = ( {cart,setCart}) => {

    const {id} = useParams();
    const [quantity,setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    useEffect(()=>{

      const fetching = async ()=>{

        try{
          const res = await fetch('/Data/Products.json');
          const data = await res.json();

          const selected = data.find((product)=> product.id === parseInt(id) )
          setProduct(selected);
        }
        catch(err){
          console.log(err.message)
        }
      }
      fetching();
    },[id])

      const submitHandler = (e) => {
      e.preventDefault();



     
    }

    const AddToCart =()=>{

      const existingProduct = cart.find ((item) => item.product.id === product.id);

      if(!existingProduct){
        
        const productToAdd = {product, quantity};
        setCart (prev => [...prev, productToAdd])
      }
    }


    if(!product){
      return ( <h2> Loading...</h2>)
    }
  return (
  
    <> 

  <ToastContainer className=" position-fixed top-0  start-50 p-5" position={ 'top-center'} style={{ zIndex: 1 }}>
    <Toast onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
      <Toast.Body className={'bg-success text-light text-center fs-6'}> Product Added to the Cart</Toast.Body>
    </Toast>
  </ToastContainer>
  <ToastContainer className=" position-fixed top-0  start-50 p-3" position={ 'top-center'} style={{ zIndex: 1 }}>
    <Toast onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
      <Toast.Body className={'bg-success text-light text-center fs-6'}>Order Placed !</Toast.Body>
    </Toast>
  </ToastContainer>

        <div className="container-fluid m-5 E-LargeScreen">

          
       <div className='h3 mb-5'>ProductDetails</div>

        <div className="row">   
          <div className="col-4 d-flex  flex-column justify-content-center align-items-center"   >
            <div className='border p-2 mb-4 '>
            <img src={product.image} alt='image' className='E-Image'  />
            </div>

            <div>
            <button className='btn btn-success me-4 text-light E-buynow-btn' onClick={()=>{setShow1(true); AddToCart();}} > Add to cart</button>
            <button className='btn btn-primary E-buynow-btn-2'  onClick={()=>{setShow2(true); submitHandler();}}> Buy now</button>
            </div>

          </div>
          <div className="col-6">
             <h4 className='mb-3'>{product.title}</h4>
                <span className=' rounded text-light px-1 d-inline-flex align-items-center ' style={{backgroundColor:"hsl(120, 77%, 35%)" , maxWidth:"50px"}}>{product.rating}<img src={StarIcon} alt="" width={20}/></span>

                <span> ({product.review})</span>

                <div className="flex mt-2">
                  <h2 className='h4'>Quanity: </h2>
                  <button className="btn btn-md btn-warning me-2 fs-4 px-2.3  py-0" onClick={()=>{ setQuantity (prev => ( prev>1 ?prev-1 : 1))}}>-</button>
                   {quantity } 
                  <button className="btn btn-md btn-warning ms-2 fs-4 px-2.3  py-0" onClick={()=> {setQuantity (prev=>(prev<10 ? prev+1 : 10))}}>+</button>
                </div>

                <div className="card-text mt-2 h2" style={{wordSpacing:"10px"}}>₹{product.price }
                <span className='text-decoration-line-through text-secondary h4'> ₹{product.MRP}</span>
                <span style={{color:"hsl(120, 77%, 35%)"}}> {product.offer}%Off </span>
                
                </div>
             <p className=''> <span className='h4'>Description:</span> <br /> {product.discription}</p>
          </div>
            
        </div>  
              
                        

    </div>


   {/*  ----- Mobile View----- */}


       <div className="container-fluid mt-2 m-0 E-MobileView">


       <div className='h3 mb-5'>ProductDetails</div>

         
          <div className="d-flex  flex-column justify-content-center align-items-center"  >
            <div className='border p-2 mb-4 '>
            <img src={product.image} alt='image' width={"300px"}   />
            </div>

          </div>
          <div className="">
            <h4 className='mb-3'>{product.title}</h4>
            <span className=' rounded text-light px-1 d-inline-flex align-items-center ' style={{backgroundColor:"hsl(120, 77%, 35%)" , maxWidth:"50px"}}>{product.rating}<img src={StarIcon} alt="" width={20}/></span>
            <span> ({product.review})</span>


                <div className="flex mt-2 ">
                  <h2 className='h4'>Quanity: </h2>
                  <button className="btn btn-md btn-warning me-2 fs-2 px-2.3  py-0" onClick={()=>{ setQuantity (prev => ( prev>1 ?prev-1 : 1))}}>-</button>
                   {quantity } 
                  <button className="btn btn-md btn-warning ms-2  fs-2 px-2 py-0" onClick={()=> {setQuantity (prev=>(prev<10 ? prev+1 : 10))}}>+</button>
                </div>

            <div className="card-text mt-2 h2" style={{wordSpacing:"10px"}}>₹{product.price }
            <span className='text-decoration-line-through text-secondary h4'> ₹{product.MRP}</span> 
            <span style={{color:"hsl(120, 77%, 35%)"}}> {product.offer}%Off </span>
                
            <div>
             <button className='btn btn-success me-4 text-light  m-3 E-buynow-btn' onClick={()=>{setShow1(true);AddToCart();}} > Add to cart</button>
             <button className='  btn btn-primary  m-3 E-buynow-btn-2' onClick={()=>{setShow2(true); submitHandler}}> Buy now</button>
            </div>

          </div>
             <p className=''> <span className='h4'>Description:</span> <br /> {product.discription}</p>    
        </div>  
              
                        

    </div>


</>


  )
}

export default ProductDetails