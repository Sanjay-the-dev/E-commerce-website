import React from 'react'
import { useState, useEffect } from 'react'
import StarIcon from '../../assets/newStar.png'


const Electronics = () => {

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts]= useState([]);

  useEffect(()=>{

    const productFetch = async()=>{

      try{
        const response = await fetch('/Data/Products.json');
        if(!response.ok){
          throw new Error("failed to fetch")
        }
        const data = await response.json();
        setProducts(data);
      }
      catch(err){
        console.log(err.message)
      }
    }

    productFetch();

  },[])

  useEffect(()=>{
 
    const electronics = products.filter((element)=> {return ( element.category === "electronics")})
    setFilterProducts(electronics);
  },[products])

  setTimeout(() => {
       console.log(filterProducts);

  }, 2000);
  return (
    
        <div className=' mt-5 mx-auto ' style={{width:"80vw"}}>
    
          <h2 className='h2'>Electronics</h2>
          <ul className='d-flex flex-wrap '>
          {filterProducts.map((element , index)=>{ return (
            <li key={index} style={{listStyleType:"none" }}>
              
              <div className="card m-3 E_Card" >
                <img  src={element.image} alt="" style={{width:"170px", height:"200px"}} className='card-img-top pt-3' />
                <div className="card-body">
                  <div className="card-title">{element.title}</div>
    {/*               <div className='card-subtitle'>{element.discription}</div>*/}               
    
                        <span className=' rounded text-light px-1 d-inline-flex align-items-center ' style={{backgroundColor:"hsl(120, 77%, 35%)" , maxWidth:"50px"}}>{element.rating}<img src={StarIcon} alt="" width={20}/></span>
                        <span> ({element.review})</span>
                        <div className="card-text" style={{wordSpacing:"10px"}}>₹{element.price } <span></span><span className='text-decoration-line-through text-secondary'> ₹{element.MRP}</span>
                        <span style={{color:"hsl(120, 77%, 35%)"}}> {element.offer}%Off </span>
    
                        </div>
                </div>
    
              </div>
    
            </li>)
          })}
          </ul>
        </div>
    
  )
}

export default Electronics