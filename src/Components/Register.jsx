import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import './Login.css'
import { Link ,useNavigate} from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const location =useNavigate()

    const[newUser,setNewuser]=useState({
        username:"",
        password:""
    })
    console.log(newUser);
    const register=async()=>{
      const {username,password}=newUser

 if(!username||!password){
  toast.info('Enter all details', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
 }
 else{
  const result=await registerAPI(newUser)
  console.log(result.data)
  if(result.status==200){
    toast.success(" user Resgister Success ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
  setTimeout(() => {
    location('/');
}, 2000);

  }
  else{
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
  }
 }
    }
  return (
    <div>

<MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.pinimg.com/originals/6e/55/e3/6e55e3f32df259ccd7a45a3c00111293.jpg'
              height='80'
              alt=''
              loading='lazy'
            /> 
           <b className='mx-3'> TIC-CINEMA</b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
<div className="row" >
  <div className="col-lg-6">
    <img className='p-1' style={{width:"775px",height:"700px"}} src="https://i.pinimg.com/originals/5f/2f/94/5f2f94d27e71ad293e56c8f4989dba35.gif" alt="" srcset="" />
  </div>
  <div className="col-lg-6">
  <MDBCard className='text-center mt-5 p-5'>
      <MDBCardBody>
        <MDBCardTitle className='text-center'><h4> User-Register</h4> </MDBCardTitle>
        <MDBCardText>
<input onChange={(e)=>{setNewuser({...newUser,username:e.target.value})}} type="text" className='form-control mt-3' placeholder='User-Name' />
<input  onChange={(e)=>{setNewuser({...newUser,password:e.target.value})}} type="password" className='form-control mt-3' placeholder='Password' />
        </MDBCardText>
       
<Link   style={{ textDecoration: 'none' }} to={"/"}>
    <p className='text-dark'>  Click Here To go Back </p>
</Link>

     <br />
        <MDBBtn onClick={register} className=' login bg-secondary text-dark mt-2 ' >
<b >
Register
</b>
        
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </div>
</div>

<ToastContainer />
    </div>
  )
}

export default Register