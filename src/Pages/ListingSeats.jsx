import React, { useState, useEffect, useContext } from 'react';
import './Listing.css';
import { useParams } from 'react-router-dom';
import ModalSeat from '../Components/ModalSeat';
import { disableAPI } from '../services/allAPI';
import { ticketbookingResponseContext } from '../ContextAPI/ContextShare';

function ListingSeats() {
const {movie}=useParams()

const {ticketbooking,setTicketbooking}=useContext(ticketbookingResponseContext)
console.log(ticketbooking);
console.log(movie);

  const rows = [10, 10, 15, 15, 20, 20]; // Number of seats per row
  //  const disabledSeats = [2, 4];
  // Array of disabled seats
  const [disabledSeats, setDisabledSeats] = useState([]);
console.log(disabledSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  useEffect(() => {
    console.log("Selected seats:", selectedSeats); // Log the selected seats
  }, [selectedSeats]);

  useEffect(() => {
    // This effect prevents checkboxes from being automatically re-checked
    // when the selectedSeats state changes.
    const checkboxes = document.querySelectorAll('.seat-checkbox');
    checkboxes.forEach((checkbox) => {
      const seatId = parseInt(checkbox.value, 10);
      checkbox.checked = selectedSeats.includes(seatId);
    });
  }, [selectedSeats]);


  let seatNumber = 1;


useEffect(()=>{
  const disabled=async()=>{
   
    const result=await disableAPI(movie)
    console.log(result.data);
    const seat=result.data
    setDisabledSeats(prevDisabledSeats => [...prevDisabledSeats, ...result.data]);
  
  }
  disabled()
},[ticketbooking])






  return (
    <div className="listing-seats">
      <h2>List of Seats</h2>
      <div className="seat-layout">
        {rows.map((rowSeats, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {Array.from({ length: rowSeats }, (_, index) => {
              const seatId = seatNumber++; // Calculate seat number and increment
              return (
                <label key={index} className="seat-label">
                  <input
                    type="checkbox"
                    value={seatId}
                    className="seat-checkbox"
                    onChange={() => handleSeatSelection(seatId)}
                    disabled={disabledSeats.includes(seatId)}
                  />
                  <span className="seat-number">{seatId}</span>
                </label>
              );
            })}
          </div>
        ))}
      </div>

      <ModalSeat seats={selectedSeats} movie={movie}/>
    </div>
  );
}

export default ListingSeats;

