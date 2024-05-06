import React , { useContext, useState } from 'react'

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { BookingAPI, SeatsAPI, bookAPI } from '../services/allAPI';
import { ticketbookingResponseContext } from '../ContextAPI/ContextShare';
function ModalSeat(props) {

  const{ticketbooking,setTicketbooking}=useContext(ticketbookingResponseContext)
  
  const{seats,movie}=props
  console.log(seats,movie);

    
    const bookingid = sessionStorage.getItem('userId');
    console.log(bookingid);
    const token=sessionStorage.getItem("token")

    const reqbody={
      seats,bookingid
    }
    console.log(reqbody);
    const book=async()=>{
        if(bookingid){
          const reqHeader = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
          }
          const response=await BookingAPI(movie,reqbody,reqHeader)
   
        console.log(response.data);
        setTicketbooking(response.data);

        toggleOpen()
        }
        // else{
          // alert("error")
        // }
    }


  
    // const [newData,setnewData]=useState([])
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
    
  return (
    <div>

        
<MDBBtn
    // disabled={value == 1}  className={`btn ${value === 1 ? 'bg-danger' : 'bg-success'} '}`}
      onClick={toggleOpen}
    >Book Ticket</MDBBtn>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Book Your Seat </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
<div className="row">
    <div className="col-lg-6 ">
    <img style={{height:"100px",width:"150px"}} src="https://st.depositphotos.com/25732784/54589/i/450/depositphotos_545891236-stock-photo-online-movie-ticket-purchase-rendering.jpg" alt="" srcset="" />
    </div>

<div className="col-lg-6">
<b className='text-dark '>Movie Name</b>
<br />

</div>
</div>          
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={book} className='bg-success'>Confirm</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default ModalSeat