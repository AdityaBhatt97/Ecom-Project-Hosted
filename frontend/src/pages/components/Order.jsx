import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { userRequest } from '../../RequestMethod';
import Navbar from './Navbar';
import './order.css'
import { Link, useLocation } from 'react-router-dom';
// import AllOrders from './AllOrders';
import axios from 'axios';
const LazyAllOrders = React.lazy(() => import('./AllOrders'))

const Order = () => {

  const [isLoading , setIsLoading] = useState(true)

  const location = useLocation();
  const path = location.pathname.split('/')[2]

    const user = useSelector(state => state.user?.currentUser)
    const [orderList , setOrderList] = useState([]);
  
const BASE_URL = 'http://localhost:5000/api'


    const getRequest =  axios.create({
      baseURL : BASE_URL,
      headers : {token : `Bearer ${user?.accessToken}`}
  })

    useEffect(() => {

        const getOrder = async() => {
          try{
               const res = await getRequest.get(`/orders/find/${user?._id}`);
            //    console.log(res.data[res.data.length -1]);
               setOrderList(res.data[res.data.length-1]);
              // setOrderList(res.data);

              
          }catch(err){
            console.log(err)
          }
        }
        

        getOrder()
    
    }, [])

  
  return (
    <div className='order'>
        <Navbar/>



          <div className='orders'>
         <div>
        
        <h1 className='order-title'>YOUR ORDERS</h1>
         </div>
   {  !orderList.products ? 
   <h2 className='no-order'>There Are No Orders! <br /> <Link to={'/products'} style={{textDecoration :'none'}}>
   <h4>Go To Products</h4>
   </Link></h2> :  

       <React.Suspense fallback= {<h2>Loading...</h2> }>

  <LazyAllOrders orderList= {orderList}/>
       </React.Suspense>  



}  
        </div>
              

 
    </div>
  )
}

export default Order
