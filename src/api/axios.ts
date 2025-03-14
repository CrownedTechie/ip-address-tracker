import axios from "axios";
import { z } from "zod";


//TODO: use .env to hide the api_key

const url = 'https://geo.ipify.org/api/v2';
export const API_KEY = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
    baseURL: url,
    timeout: 10000, //waits for a response, after 10 secs it aborts the request
    headers: {
      'Content-Type': 'application/json',
    },
});


//TODO1: create a get IP address function here first. 
//TODO2: use zod to validate the response from backend. I want it to be within the get function 

//TODO: convert the fetchIPDetails to a custom hook. Should extend loading, refetch 


const fetchIPDetails = async <T>( zodSchema: z.ZodType<T>, ipAddress?: string ) => {

    try {
        const params = {
            apiKey: API_KEY,
            ...(ipAddress && { ipAddress })
        }
    
        const response = await axiosInstance.get('/country,city', { params });
    
        //TODO: Work on handling different error types later 
        if(response.status !== 200) {
            throw new Error("Failed to fetch Data")
        }
        const data= zodSchema.parse(response.data);
        return data;
    } catch (error) {
        //throw new Error(error); //! why am i having an issue here? I still have to type cast the error too?
        console.log(error);
    }
}
 
export default fetchIPDetails;