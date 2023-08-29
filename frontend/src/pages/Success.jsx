import React, { useState } from 'react'
import './success.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { userRequest } from '../RequestMethod'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, getTotal } from '../Redux/CartRedux'
import { useNavigate } from 'react-router-dom'


const Success = () => {
const location = useLocation();
const dispatch = useDispatch();

dispatch(getTotal());

const stripeId = location.pathname.split('/')[2];

const cart = useSelector(state=> state?.cart);
const totalCart = useSelector(state => state.cart?.products);
// let currentUser = sessionStorage?.getItem('userDetails');
// currentUser = JSON.parse(currentUser);

const user = useSelector(state => state.user?.currentUser);


const navigate = useNavigate();
const [orderId , setOrderId] = useState(null);


  useEffect( ()=> {
    
    const placeOrder = async() => {

      if(cart.products === []){
        console.log('cart is Empty');

      }else{

        
        try{
          const res = await userRequest.post('/orders/', {
            userId : user._id,
            products : cart.products.map(item => ({
              productId : item._id,
              productImg : item.img,
              productName : item.title,
              quantity : item.quantity,
              color : item.color,
              size : item.size,
              price : item.price
            })),
            amount : cart.total,
          });
          if(res.data){
            setOrderId(res.data._id);
            dispatch(emptyCart());
            
            setTimeout(()=> {
              navigate('/');
            }, 1000)
            
          }
          
        }catch(err){
          console.log(err)
        }
      }
      }
      stripeId && placeOrder()
    }, [])


console.log(stripeId)
return (
    <div className='success'>
      {
       orderId ? <h2>

         `Your order has placed Successfully! Your oder id is ${orderId}`
        <br /> <h4>Please do not refresh!</h4>
         <Link to= '/'><h2>Back To Home</h2></Link>
       </h2>:
       <div>

       <h2>Please Wait Your Order is Being Placed... </h2>
       <h4>Please do not refresh!</h4>
       </div>
      
      }
    </div>
  )
}

export default Success
