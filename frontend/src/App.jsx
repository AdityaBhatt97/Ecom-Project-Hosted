import './App.css';
import React from 'react'
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import SingleProduct from './pages/SingleProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success';
import Order from './pages/components/Order';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/products/:category' element={<ProductsList />} />
        <Route path='/products/men/:category' element={<ProductsList />} />
        <Route path='/products/' element={<ProductsList />} />

        <Route path='/product/:id' element={<SingleProduct />} />

        <Route path ='/cart' element={<Cart />} />
        <Route path ='/success/:stripeId' element={<Success />} />
      

        <Route path ='/order/:id' element={<Order />  } />
      


      </Routes>
    </Router>
  );
}

export default App;
