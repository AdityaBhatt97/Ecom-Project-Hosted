import React from 'react'
import "./products.css"
import Product from './Product'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'





const Products = () => {


   const catLast = useLocation().pathname.split('/');
    let n ;
    if(catLast.length-1 > 1 ){
      n = catLast.length-1;
    }else{
      n = 0;
    }
    

  const cat = useLocation().pathname.split('/')[n];
  

  const [product, setProducts] = useState([])
  useEffect(() => {

    window.scrollTo(0,0)

    const getApi = async () => {

      try {
        const res = await axios.get( cat ? `http://localhost:5000/api/products/?category=${cat}`
                                             : 'http://localhost:5000/api/products'
        );
        
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
  
    getApi();
  }
    , [cat])



  return (
    <div className='products-page'>
      <h2 className='trending-title'>{cat ? cat : 'Products'}</h2>
      <div className='all_products-page'>
        {
          product.map((items) => (

            <Product items={items} key={items?._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Products
