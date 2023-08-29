import React from 'react'
import './trendingproducts.css'
import TrendingProduct from './TrendingProduct'
import { AllProducts } from '../../data'
import { Link } from 'react-router-dom'

const TrendingProducts = (props) => {
  return (
    <div className='products'>
      
      <h2 className='trending-title'>{props.title}</h2>

      <div className='all-products'>
        {
     AllProducts.map((items) => (


       <TrendingProduct  items={items} key={items?.id} />
       ))
        }
      </div>
<Link to={'/products'}>
      <button className='explore'>Explore These Products!</button>
</Link>

      
       
  
      
    </div>
  )
}

export default TrendingProducts
