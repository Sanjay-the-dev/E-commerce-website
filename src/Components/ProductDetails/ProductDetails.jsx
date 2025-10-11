import React from 'react'

import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null)

    useEffect(()=>{

      const fetching = async ()=>{

        try{
          const res = await fetch('/Data/Products.json');
          const data = await res.json();

          const selected = data.find((element)=> element.id === parseInt(id) )
          setProduct(selected);
        }
        catch(err){
          console.log(err.message)
        }
      }
      fetching();
    },[id])


    if(!product){
      return ( <h2> Loading...</h2>)
    }
  return (
  

    <div className="container-fluid m-5">
       <div className='h3'>ProductDetails</div>

        <div className="row">   
          <div className="col-4">
            <img src={product.image} alt='image' className='img-fluid rounded' />
          </div>
          <div className="col-8">
             <h4>{product.title}</h4>
             <p> {product.discription}</p>
          </div>
            
        </div>  
              
                        

    </div>



  )
}

export default ProductDetails