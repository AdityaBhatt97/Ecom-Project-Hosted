import React from 'react'
import Navbar from './components/Navbar'
import './home.css'
import Banner from './components/Banner'
import Wave from './components/Images/wave.svg'
import { topProducts } from "../data"
import Hero from "./components/Images/hero.png"
import TrendingProducts from './components/TrendingProducts'
import Footer from './Footer'
import AnotherWave from './components/Images/wave2.svg'
import Specially from './components/Specially'
// import { user } from '../RequestMethod'
import ViewOrder from './components/ViewOrder'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Home = () => {

  const specialCart = localStorage.getItem('cart');
  const currentUser = useSelector(state => state.user?.currentUser)

  // console.log(user.accessToken)
  return (



    <div className='home'>
      {
currentUser &&

        
        <ViewOrder/>
      }
      <Navbar />
      <div className='side-slope'></div>
      <Banner />
      <div className='wave'>
        <img src={Wave} alt="" />
      </div>
      <div className='top'>
        <div className='top-title'>

          <h2>TOP PRODUCTS</h2>
        </div>
        <div className='top-products'>

          {
            topProducts.map((item) => (

<Link to={`/product/${item.id}` }  style= {{textDecoration : "none" , color : "black"}}>
              <div className='top-product' key={item.id}>
                <img src={item.img} alt="" className='top-images' />
                <h4>{item.name}</h4>


              </div>
          </Link>
            ))
          }

        </div>

      </div>
      <img src={AnotherWave} alt="" className='another-wave' />
    

      <TrendingProducts title="Trending Products" />
    

      <Footer />
    </div>

  )
}

export default Home
