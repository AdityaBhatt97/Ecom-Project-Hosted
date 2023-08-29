import React from 'react'
import Hero from './Images/hero.png'
import  './banner.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  const [images , setImages] = useState('')
  const handleClick = (img) => {
    if(img === "img"){
      return setImages("325deg")
    }
    if(img === "img2") {
      return setImages("335deg")
    }
    if(img === "img3"){
      return setImages("360deg")
    }
      
  
  }

  return (
  
    <div className='banner'>
      <div className='title'>
      <h1 >PLAY WITH ELECTRIC <br /> NIKE SHOES</h1>

      </div>

      <div className='title2'>
        <h2>UNLEASH THE <br /> SPEED 2.0</h2>
      </div>

      <div className='image'>

<Link to={'/product/635a5ebe739a867ed3e8166e'}>
      <img src= {Hero} alt="" style={ {transform: `rotate(${images})`, transition: "all .5s ease-in-out"  }}/>


</Link>
      </div>

      <div className='images'>
        <div>
          <img src={Hero} alt="" className='img' onClick={() => handleClick("img")} />
        </div>
        <div>
          <img src={Hero} alt="" className='img2' onClick={() => handleClick("img2")}/>
        </div>
        <div>
          <img src={Hero} alt="" className='img3' onClick={() => handleClick("img3")}/>
        </div>

      </div>
    </div>
  )
}

export default Banner
