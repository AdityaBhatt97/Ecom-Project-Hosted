import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({items}) => {
  
  return (
      <Link to={`/product/${items._id}`} style= {{textDecoration : 'none'}}>
    <div className='product-bg' key={items._id}>
      <div className='product_image-bg'>
        <img src={items.img} alt="" />
      </div>
      <h4>{items.title}</h4>
      <h4>{`Rs. ${items.price}`}</h4>
      <button className='btn addProduct'>Add To Cart</button>
    </div>
      </Link>
  )
}


export default Product
