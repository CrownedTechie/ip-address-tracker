import axios from "axios";
import { z } from "zod";


// export const API_KEY = "apiKey=at_OnpuI5H6sjJjQyTFJafQ0hAown9Wt";
// https://geo.ipify.org/api/v2/country,city?apiKey=at_OnpuI5H6sjJjQyTFJafQ0hAown9Wt&ipAddress=8.8.8.8

const url = 'https://geo.ipify.org/api/v2';
const API_KEY = 'at_OnpuI5H6sjJjQyTFJafQ0hAown9Wt';

const axiosInstance = axios.create({
    baseURL: url,
    timeout: 10000, //waits for a response, after 10 secs it aborts the request
    headers: {
      'Content-Type': 'application/json',
    },
});


//TODO1: create a get IP address function here first. 
//TODO2: use zod to validate the response from backend. I want it to be within the get function 



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
        const data = response.data;
        console.log(data);
        return zodSchema.parse(data);   
    } catch (error) {
        //throw new Error(error); //! why am i having an issue here? I still have to type cast the error too?
        console.log(error);
    }
}
 
export default fetchIPDetails;