import axios from "axios";

const url = 'https://geo.ipify.org/api/v2';
export const API_KEY = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
    baseURL: url,
    timeout: 10000, //waits for a response, after 10 secs it aborts the request
    headers: {
      'Content-Type': 'application/json',
    },
});

// const fetchIPDetails = async <T>( zodSchema: z.ZodType<T>, ipAddress?: string ) => {

//     try {
//         const params = {
//             apiKey: API_KEY,
//             ...(ipAddress && { ipAddress })
//         }
    
//         const response = await axiosInstance.get('/country,city', { params });
    
//         //TODO: Work on handling different error types later 
//         if(response.status !== 200) {
//             throw new Error("Failed to fetch Data")
//         }
//         const data= zodSchema.parse(response.data);
//         return data;
//     } catch (error) {
//         //throw new Error(error); //! why am i having an issue here? I still have to type cast the error too?
//         console.log(error);
//     }
// }
 
// export default fetchIPDetails;