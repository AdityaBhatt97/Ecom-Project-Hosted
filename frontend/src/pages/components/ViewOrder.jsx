import React from 'react'
import { useSelector } from 'react-redux'
import './viewOrder.css'
import { Link } from 'react-router-dom'

const ViewOrder = () => {
    
    let currentUser = useSelector(state => state.user?.currentUser);

    
  

  return (
    <div className='view-order'>
      <h2>

        VIEW YOUR ORDERS! 
      </h2>
      
      <Link to = {`/order/${currentUser._id}`}>
      <button>

        Your Orders
      </button>
      </Link>
      
    
      
    </div>
  )
}

export default ViewOrder
