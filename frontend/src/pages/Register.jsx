import React, { useEffect } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { RegisterSchema } from '../schemas/RegisterSchema'
import { useSelector } from 'react-redux'


const initialValues = {
  username : '',
  email : '' , 
  password : ''
}
const Register = () => {

  const user = useSelector(state => state.user.currentUser?.username)
  const [error , setError] = useState('') 
  const navigate = useNavigate()
  
 const Formik =  useFormik({
    initialValues,
    validationSchema : RegisterSchema,
    onSubmit : async(values) => {

     console.log(values)
     try{

       const res = await  axios.post('http://localhost:5000/api/auth/register', { username : Formik.values.username, email : Formik.values.email, password:Formik.values.password })
       console.log(res)  
       if(res.status === 201){
         
         navigate('/')
        }
      }catch(err){
         console.log(err)
         setError(err?.response?.data?.message)
      }
    }
  })

  useEffect(() => {
user && navigate('/')
  } , [user])


  // console.log(Formik , Formik.errors)

  
  
  return (
    <div className='register-container'>
     
     <Link to={'/'}>
      <img src='https://images-platform.99static.com//cMBAi8cQkv2412QnzWlGbw3j4ME=/309x291:1064x1046/fit-in/590x590/99designs-contests-attachments/63/63533/attachment_63533816' alt="" />
      </Link>
      <form className='register-bg' onSubmit={Formik.handleSubmit}>
        <h2>SIGN-UP</h2>
        {/* <input type="text" placeholder='username' required={true} name='username' onChange={(e) => setUsername(e.target.value)} /> */}
        {/* <input type= "email" placeholder='email' required= {true}  name='email' onChange={(e) => setEmail(e.target.value)} /> */}
        {/* <input type="password" placeholder='password' required= {true} name='password' onChange={(e) => setPassword(e.target.value)} /> */}
        <input type="text" placeholder='username' required={true} name='username' value={Formik.values.username} onChange={Formik.handleChange}/>
        {Formik.errors.username && Formik.touched.username ? <span>{Formik.errors.username}</span> : null}
        <input type= "email" placeholder='email' required= {true}  name='email'  value={Formik.values.email} onChange={Formik.handleChange}/>
        {Formik.errors.email && Formik.touched.email ? <span>{Formik.errors.email}</span> : null}
      
        <input type="password" placeholder='password' required= {true} name='password' value={Formik.values.password} onChange={Formik.handleChange}/>
        {Formik.errors.password && Formik.touched.password ? <span>{Formik.errors.password}</span> : null}
        
   
       {error && <span>{error}</span>}
    
        <button className='btn'  >Sign Up</button>
  
       
      </form>

     </div>
  )
}

export default Register
