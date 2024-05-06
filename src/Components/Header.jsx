import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function Header() {
  const location =useNavigate()
  const logout=()=>{
    sessionStorage.clear()
location('/')
  }
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
        <button onClick={logout} className=' m-2 btn btn-danger'>Log out</button>
      </MDBNavbar>


    </div>
  )
}

export default Header