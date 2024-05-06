import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import "./Home.css"
import Login from '../Components/Login';
import Footer from '../Components/Footer';
function Home() {
  return (
    <div>
 <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.pinimg.com/originals/6e/55/e3/6e55e3f32df259ccd7a45a3c00111293.jpg'
              height='50'
             
              alt=''
              loading='lazy'
            /> 
           <b className='mx-3'> TIC-CINEMA</b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
<div className="row">
    <div className="col-lg-6">
    <img src="https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg" className='p-5' alt="" srcset="" />
    <h4 className='p-5'>


"Unlock the full potential of MovieMania by creating your account today! Enjoy personalized recommendations, easy booking, and exclusive offers. Already a member? Simply log in to access your account and pick up where you left off. Join us now and embark on your cinematic journey!"


</h4>

    </div>
    <div className="col-lg-6">
    <div className='mt-5'>
    <Login />
    </div>
    </div>
</div>

<Footer/>
    </div>
  )
}

export default Home