import React from 'react'
import { useState,useEffect } from 'react'
import StarIcon from '../../assets/newStar.png'
import {  useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MainContent = () => {

  const [products, setProducts] = useState([]);
  const [searchParams]= useSearchParams();
  const nav = useNavigate()

  useEffect(()=>{

    const ProductFetch = async()=>{

      try{
        const response = await fetch('/Data/Products.json');
        if(!response.ok){
          throw new Error("Failed To Fetch")
        }
        const data = await response.json();
        setProducts(data);

      const keyword = searchParams.get("keyword").toLowerCase() || '';

      const filtered = data.filter((element)=>{
         return ( element.title.toLowerCase().includes(keyword))
      })
      setProducts (filtered)
      }
      catch(err){
        console.log(err.message); 
      }


    }
    ProductFetch();
  },[searchParams])

    if(products.length === 0){
      
    return (     <div>  <h2 className='h2'>All Products </h2>
    <br />
    <br />
    <br />
                   <p className='h3 text-center'>No Product Found !</p> </div>)
  }

  //console.log(products);

  //products.splice(-5)     

  return (
    <div className=' mt-5 mx-auto ' style={{width:"80vw"}}>

      <h2 className='h2'>All Products </h2>

  
  


      <ul className='d-flex flex-wrap '>
      {products.map((element , index)=>{ return (
        <li key={index} style={{listStyleType:"none" , cursor:"pointer" }}  onClick={()=>{nav(`/product/${element.id}`)}} >
          
          <div className="card m-3 E_Card"  >
            <img  src={element.image} alt="" style={{width:"170px", height:"200px"}} className='card-img-top pt-3' />
            <div className="card-body" >
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

export default MainContent