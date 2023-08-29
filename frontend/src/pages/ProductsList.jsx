import React from 'react'
import Navbar from './components/Navbar'
import Footer from './Footer'
import './productList.css'
import Products from './components/Products'
import { useSelector } from 'react-redux'
import ViewOrder from './components/ViewOrder'



const ProductsList = () => {
 const currentUser = useSelector(state => state.user?.currentUser)

  return (
    <div className='productList'>
     
      <Navbar/>
      
      <div className='product-show'>

       <Products />
      </div>

       <Footer/>
    </div>
  )
}

export default ProductsList
