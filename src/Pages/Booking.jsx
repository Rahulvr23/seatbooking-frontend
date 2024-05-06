import React from 'react'
import { useEffect,useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { userticketbookings } from '../services/allAPI';



function Booking() {
  const [rows, setRows] = useState([20, 10, 10, 10, 5]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (rowIndex, seatIndex) => {
    const seatId = `${rowIndex}-${seatIndex}`;
    setSelectedSeats(prevSelectedSeats => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter(seat => seat !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });}








    const[booking,setbooking]=useState([])
    const id= sessionStorage.getItem('userId');
    

    console.log(id);
   
  useEffect(()=>{
    const getbooking=async()=>{
     
      try {
        const allbooking=await userticketbookings(id)
        console.log(allbooking.data);
        setbooking(allbooking.data)

      } catch (error) {
        console.error('Error fetching :', error);
      }
    }
    getbooking()
  },[])
  return (
 








    <div>

      <h2 className='text-center mt-5'>My Bookings</h2>
            <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Seat Number</th>
         
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        
           {
            booking.map((item)=>(
              <tr>
       
               
         
              <td>
                <p className='fw-normal mb-1'>{item.movie}</p>

              </td>
              <td>
                
                 {item.seats.map((item)=>(<button className='btn'>{item}</button>))}
              
              </td>
            
            </tr>
            )

            )
           }
          
       
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default Booking