import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import './Login.css'
import { Link,useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { loginAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const [user,setUser]=useState({
        username:"",
        password:""
    })

const location=useNavigate()
    console.log(user);

    const login=async()=>{
      const{username,password}=user
      if(!username||!password){
        
        toast.info('please fill data', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
        // alert("enter all details")

      }
      else{
        const response=await loginAPI(user)
        console.log(response);
        if (response.status==200) {
          console.log(response.data.validUser._id);

         const token=response.data.token
          const userId = response.data.validUser._id;
      
          sessionStorage.setItem("userId", userId);
          sessionStorage.setItem("token",token)
        
          
          location('/filims')
    
        } else {

          toast.info('Enter Valid', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
          // alert("invalid data")
        }
      }
    }
  return (
    <div>
            <MDBCard className='text-center'>
      <MDBCardBody>
        <MDBCardTitle className='text-center'><h4> User-Login</h4> </MDBCardTitle>
        <MDBCardText>
<input type="text" onChange={(e)=>{setUser({...user,username:e.target.value})}} className='form-control mt-3' placeholder='User-Name' />
<input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} className='form-control mt-3' placeholder='Password' />
        </MDBCardText>
       
<Link   style={{ textDecoration: 'none' }} to={"/Register"}>
    <p className='text-dark'> Not Yet Registered Click Here </p>
</Link>

     <br />
        <MDBBtn onClick={login} className=' login bg-secondary text-dark mt-2 ' >
<b >
Login
</b>
        
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <ToastContainer />
    </div>
  )
}

export default Login