import React from 'react'
import { Fragment } from 'react';
import './cart.css';
import deleteIcon from './DeleteIcon.png'
import { useState} from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';



const Cart = ( { cart, setCart}) => {

  console.log(cart);

  const [show, setShow] = useState(false);


  const increaseQuanitity =  (ele)=>{
 
     const increasedCartQuantity = cart.map ((i)=>{
      if (i.product.id == ele && i.quantity<10){
          i.quantity++ 
          console.log(i.quantity);
          
      }
      return i;
     })

     setCart(increasedCartQuantity);
  }
  const decreaseQuanitity =  (ele)=>{
 
     const decreaseCartQuantity = cart.map ((item)=>{
         console.log(item.quantity)
      if (item.product.id == ele && item.quantity>1){
          item.quantity--
          console.log(item.quantity);
          
      }
      return item;
     })

     setCart(decreaseCartQuantity);
  }

  const deleteItem = (element)=>{

    const deleted = cart.filter((item)=>{
       return item.product.id !== element.product.id;
    })

    setCart(deleted)
  }


{  if(cart.length === 0 ){
    return <h2 className='text-center mt-5'>Cart is Empty</h2>
  }}

  return (

    <div>
  <ToastContainer className=" position-fixed top-0  start-50 p-3" position={ 'top-center'} style={{ zIndex: 1 }}>
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Body className={'bg-success text-light'}>Order Placed !</Toast.Body>
    </Toast>
  </ToastContainer>


  <div className="E-cart-container">
    <ul>
      <h2>Products</h2>
      {cart.map((element) =>{
        return(<li key={element.product.id} className='  E-Cart-Items '> 

                                {/*      Part I */}
        <div className="d-flex flex-column flex-sm-row">
          <div>
            <img src={element.product.image} alt="" className='E-Cart-Image' />          
            <button className='btn ms-4 E-DeleteBtn ms-2 me-sm-4  d-sm-none' onClick={()=>{deleteItem(element)}}><img src={deleteIcon} alt=""  width={"45px"} height={"auto"}/></button>
          </div>
          <div style={{width:"250px"}}>
            <h4 className=' E-Items-Font'>Title : {element.product.title} </h4>
            <hr  />
             <div className=' E-Items-Font  '> Price: ₹{element.product.price}</div> 
          </div>
        </div>
                                {/*      Part II */}  

        <div className="d-flex align-items-center " style={{justifyContent:"space-between"}}>     

          <div className="flex mt-2 ms-2 me-sm-4 me-xl-5 ">
            <h2 className='h4  E-Items-Font'>Quanity: </h2>
            <button className="btn btn-md btn-warning me-2 fs-4 px-2.3  py-0" onClick={()=> {decreaseQuanitity(element.product.id)} } >-</button>
             <span className="E-Items-Font">{element.quantity }</span>  
            <button className="btn btn-md btn-warning ms-2 fs-4 px-2  py-0" onClick={()=>{ increaseQuanitity(element.product.id)}} >+</button>
          </div>

          <div className=' h5 ms-4 me-sm-4 me-xl-5 E-Items-Font'>
            Total Price : <br /> ₹  { Number(element.product.price.replace(/[^0-9.]/g,"")) * Number( element.quantity)}
          </div>
        
          <div>
            <button className='btn ms-4 E-DeleteBtn ms-2 me-sm-4 E-Items-Font  d-none d-sm-block' onClick={()=>{deleteItem(element)}}><img src={deleteIcon} alt=""  width={"45px"} height={"auto"}/></button>
          </div>
        </div>
         </li>
        )
      })}
      
    </ul>

    <div>
      <h2 >Bill Details</h2>
      <hr />
      <h4 className='fs-5'>Total Amount : ₹ {cart.reduce((acc, current) => acc + Number(current.product.price.replace(/[^0-9.]/g,"")) * Number(current.quantity), 0)}.00</h4>
      <h4 className='fs-5'>Delivery Charge : Free Delivery</h4>
      <div className='text-center mt-3'>
        <button className='btn btn-success px-5 py-2 fs-4' onClick={()=>{setShow(true)}}>Checkout</button>
      </div>
    </div>
  </div>
</div>



    
  )
}

export default Cart