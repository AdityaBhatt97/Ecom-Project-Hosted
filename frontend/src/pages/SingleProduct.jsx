import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Images/hero.png'
import './SingleProduct.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../Redux/CartRedux'
import { Link } from 'react-router-dom'
import Specially from './components/Specially'

const SingleProduct = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [product, setProducts] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    const [relatedProducts, setRelatedProduct] = useState([]);
    const category = product.categories?.[1]
   

    const specialCart = localStorage.getItem('cart');

    useEffect(() => {

        
        const gettingApi = async () => {
            const res = await axios.get(`http://localhost:5000/api/products/?category=${category}`)
            setRelatedProduct(res.data.slice(1, 4));
        }
        gettingApi();
    }, [product])
    
 
    
    
    useEffect(() => {

        window.scrollTo(0,0);
        setQuantity(1)
        const getApi = async () => {
            
            try {
                const res = await axios.get(`http://localhost:5000/api/products/find/${path}`);
                setProducts(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getApi();
    }, [path])

    useEffect(() => {

        const setting = async () => {

            setColor(`${product.color[0]}`);
            
            setSize(`${product.size[0]}`);
            
        }
        setting();
    }, [product])
 

   

    const handleChange = (text) => {
        if (text === "add") {
            setQuantity(quantity + 1);
        }
        if (text === "remove") {
            quantity > 1 && setQuantity(quantity - 1)
        }
    }

    const handleClick = () => {
        dispatch(addProducts({ ...product, quantity, color, size }))
        localStorage.setItem('cart', JSON.stringify(product))
    }

    return (
        <div className='single-product'>
            < Navbar />
            <div className='highlight-product'>
                <div className='imagez'>
                    <img src={product.img} alt="" />
                    {/* <img src={Hero} alt="" /> */}

                </div>
                <div className='info'>
                    <div className='title-desc'>

                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    </div>

                    <div className='adding'>
                    <h2>{`Rs. ${product.price}`}</h2>
                        <div className='color'>
                            <h4>Color:</h4>
                            <select name="" id="" onChange={(e) => setColor(e.target.value)} value={color}>

                                {
                                    product.color?.map(c => (


                                        <option key={c} >{c}</option>
                                    ))
                                }




                            </select>

                        </div>
                        <div className='size'>
                            <h4>Size:</h4>
                            <select name="" id="" onChange={(e) => setSize(e.target.value)} value={size}>
                                {
                                    product.size?.map((s) => (

                                        <option key={s}>{s}</option>
                                    ))
                                }



                            </select>
                        </div>
                        <div className='quantity'>


                            <button className='btn quantities' onClick={() => handleChange("remove")}>Remove</button>
                            <span>{quantity}</span>
                            <button className='btn quantities' onClick={() => handleChange("add")}>Add</button>
                        </div>
                    <button className='btn add-to-cart' onClick={handleClick}>Add To Cart</button>
                    </div>

                </div>

            </div>
            <div className='related'>
                <h2>Related Products</h2>
                <div className='related-products'>
                    {
                        relatedProducts.map(items => (
                            <Link to={`/product/${items._id}`} style={{textDecoration: 'none'}}>
                                <div key={items?._id}>

                                    <img src={items.img} alt="" />
                                    {/* <img src={Hero} alt="" /> */}
                                    <h3>{items.title}</h3>

                                </div>
                            </Link>

                        ))
                    }
                </div>


            </div>
               
               <Link to={`/product/${relatedProducts[0]?._id}`}>
            <div className='related-products-1'>
                <img src={relatedProducts[0]?.img} alt="" />
                {/* <img src={Hero} alt="" /> */}

            </div>
               </Link>
             


            <Link to={`/product/${relatedProducts[1]?._id}`}>
             <div className='related-products-2'>
                <img src={relatedProducts[1]?.img} alt="" />
                {/* <img src={Hero} alt="" /> */}
                </div>
            </Link>

            {specialCart && <Specially />}

        </div>



    )
}

export default SingleProduct
