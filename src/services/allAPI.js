import { baseUrl } from "./baseUrl"
import { commonAPIs } from "./commonAPI"

export const registerAPI=async(user)=>{
try {
    const response=await commonAPIs("post",`${baseUrl}/register`,user,"")
    return response;
} catch (error) {
    return error;
}
}


export const loginAPI=async(user)=>{
    try {
        const response=await commonAPIs("post",`${baseUrl}/login`,user,"")
        return response;
    } catch (error) {
        return error;
    }
    }

    export const MoviesAPI=async()=>{
        try {
            const response=await commonAPIs("get",`${baseUrl}/allmovie`,"","")
            return response;  
        } catch (error) {
            return error;
        }
    }

    export const SeatsAPI=async(movieName)=>{
        try {
            const response=await commonAPIs("get",`${baseUrl}/getseats/${movieName}`,"","")
            return response;  
        } catch (error) {
            return error
        }
    }
//

export const BookingAPI=async(movie,reqbody,reqHeader)=>{
    try {
        console.log(movie,reqbody);
        const response=await commonAPIs("post",`${baseUrl}/newbooking/${movie}`,reqbody,reqHeader)
        return response;  
    } catch (error) {
        return error
    }
}
//

export const disableAPI=async(movie)=>{
    try {
        const response=await commonAPIs("get",`${baseUrl}/disabled/${movie}`,"","")
        return response
    } catch (error) {
        return error
    }
}

export const userticketbookings=async(bookingid)=>{
    try {
        console.log(bookingid);
        const response=await commonAPIs("get",`${baseUrl}/mybooking/${bookingid}`,"","")

        return response
    } catch (error) {
        return error
    }
}







    // export const bookAPI=async(bid,booking,reqHeader)=>{
    //     try {
    //         const response=await commonAPIs("put",`${baseUrl}/book/${bid}`,booking,reqHeader)
    //         return response;  
    //     } catch (error) {
    //         return error
    //     }  
    // }
// export const userbookingAPI=async(id)=>{
//     console.log(id);
//     try {
//         const response=await commonAPIs("get",`${baseUrl}/userbooking/${id}`,"","")
//         return response;  
//     } catch (error) {
//         return error
//     }  
// }