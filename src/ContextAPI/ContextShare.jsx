import React, { useState } from 'react'
import { createContext } from 'react'
export const ticketbookingResponseContext=createContext()
function ContextShare({children}) {
    const [ticketbooking,setTicketbooking]=useState("")
  return (
    <div>
        <ticketbookingResponseContext.Provider value={{ticketbooking,setTicketbooking}}>
            {children}
        </ticketbookingResponseContext.Provider>
    </div>
  )
}

export default ContextShare