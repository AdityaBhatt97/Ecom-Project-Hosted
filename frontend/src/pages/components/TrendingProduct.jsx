import React from 'react'
import './trendingproduct.css'
import { Link } from 'react-router-dom'

const TrendingProduct = ({items},props) => {
  return (
   
    <div className='product' key={items.id}  >
        <img src={items.img} alt="" style={{height : items.height}} />
        <h4>{items.name}</h4>
  
      
    </div>
   
  )
}

export default TrendingProduct
