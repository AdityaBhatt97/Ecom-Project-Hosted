import React from 'react'
import './navbar.css'
import Cart from './Images/cart.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/UserRedux'



 

const Navbar = () => {
  
  const dispatch = useDispatch();

  const quantity = useSelector(state => state.cart?.quantity);
  

  let currentUser = useSelector(state => state.user?.currentUser);
  // let currentUser = sessionStorage.getItem('userDetails');
  // currentUser = JSON.parse(currentUser);



  
  const Logout = () => {
    dispatch(logout());
    sessionStorage.removeItem('userDetails');
    window.location.reload();
  }

  
  
  return (

    <div className='navbar'>
      <div className='left'>
        <Link to={`/`} style={{textDecoration : "none" }}>
          <h2>ECOM.</h2>
        </Link>
      </div>
      <div className='center'>
        <Link to={'/'} style={{textDecoration: 'none'}}>
        <h4>Home</h4>
        </Link>
        <Link to={`/products`} style = {{textDecoration : "none"}}>
        <h4>Products</h4>
        </Link>

        <Link to={'/products/men'}  style={{textDecoration: 'none'}}>
          <h4>Men</h4>
        </Link>
        <Link to={'/products/women'}  style={{textDecoration: 'none'}}>
          <h4>Women</h4>
        </Link>
 
 
      
      </div>
      <div className='right'>
           {
          !currentUser &&
          <Link to={'/register'}  style={{textDecoration: 'none'}}>
             <button className='btn'>REGISTER</button>
          </Link>
          }
        { !currentUser &&
        <Link to={'/login'}  style={{textDecoration: 'none'}}>
        <button className='btn'>LOGIN</button>
        </Link>
        }
        {currentUser && <h2>{currentUser.username}</h2> }
          
 {currentUser && <button onClick= {Logout} className= 'btn'>Logout</button>}

        

<Link to={'/cart'}  style={{textDecoration: 'none'}}>
  <div className='cart'>

      <img src={Cart} alt="" />
      <div style={currentUser && {right : "3.2%", color: 'white'}}>{quantity}</div>
  </div>

</Link>

      </div>

    </div>
  )
  
}

export default Navbar
