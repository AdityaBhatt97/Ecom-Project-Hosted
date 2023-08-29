import React from 'react'
import './order.css'
import { Link } from 'react-router-dom'


const AllOrders = ({orderList}) => {

  
  return (

   
     <div className='all-orders'>
   
 {

   orderList?.products.length > 0 ?
   <div className='all-orders-info'>
    <h2>{`Order ID : ${orderList._id} `}</h2>

           { 
             orderList?.products.map(items => (
          
                 <div className='all-order-items' key={items?._id}>
                       <img src={items?.productImg} alt="" />
                       <h4>{items?.productName}</h4>
                       <h4>{items?.color}</h4>
                       <h4>{items?.size}</h4>
                       <h4>{items?.quantity}</h4>
                       <h4>{`Rs.${items.price * items?.quantity}`}</h4>

                       
                   </div>
      
     
     
     ))
    }
           <h2>{`Total : Rs.${orderList?.amount}`}</h2>
          </div>
         :  
         <h2 className='no-order'>There Are No Orders! <br /> <Link to={'/products'} style={{textDecoration :'none'}}>
         <h4>Go To Products</h4>
         </Link></h2>
  }
  
       </div>
     
  
  )
}

export default AllOrders
