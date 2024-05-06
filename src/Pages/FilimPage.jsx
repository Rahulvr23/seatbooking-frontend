import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import Footer from '../Components/Footer';
import { MoviesAPI } from '../services/allAPI';
function FilimPage() {
  const[allMovies,setAllmovies]=useState([])
  console.log(allMovies);
useEffect(()=>{
const getallMovies=async()=>{
try {
  const allMovies=await MoviesAPI()
  console.log(allMovies.data);
  setAllmovies(allMovies.data);
  
} catch (error) {
  console.error('Error fetching music:', error);
}
}
getallMovies()

},[])









  return (
    <div>

        <Header/>
<div className="row">
  <div className="col-lg-6">
    <h1 className='p-5'>Chech out Your Bookings</h1>
    <Link to={'/bookings'}>
    <img style={{height:"400px"}} className='p-5' src="https://img.freepik.com/premium-vector/movie-tickets-online_118813-8545.jpg" alt="" srcset="" />
    </Link>
  
  </div>
  <div className="col-lg-6">

  </div>
</div>
       <div className='p-5'>
       <h1  > Check out Latest Movies</h1>
       <b className='text-dark'>Book Your Tickets</b>
       </div>
        

        <div className="row p-5 text-center">
          {
            allMovies.map((item)=>(
              <div className="col-lg-3  ">

              <MDBCard className='mt-5'>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={item.Poster} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle><h2>{item.Title}</h2></MDBCardTitle>
          <MDBCardText>
<b>Run Time:{item.Runtime}</b>
          </MDBCardText>
         <Link to={`/seats/${item.Title}`} >
         <MDBBtn className='bg-secondary text-dark' href='#'>Book-Now</MDBBtn>
         </Link>
         

         
         
        </MDBCardBody>
      </MDBCard>
              </div>
            ))
          }
        
        </div>
        <Footer/>
    </div>
  )
}

export default FilimPage