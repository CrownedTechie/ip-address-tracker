import { useEffect, useState } from "react";
import { API_KEY, axiosInstance } from "../api/axios";

type FetchProps<TParams> = {
  url: string;
  params?: TParams;
};

type ApiError = {
  message: string;
  status?: number;
};

const useFetch = <TData, TParams = Record<string, unknown>>
({ url, params }: FetchProps<TParams>) => {
 const [data, setData] = useState<TData | null>(null);
 const [loading, setLoading] = useState<boolean>(false);
 const [error, setError] = useState<ApiError | null>(null);

 useEffect(() => {
  const controller = new AbortController();

  const getDetails = async () => {
   setLoading(true);
   try {
    const response = await axiosInstance.get<TData>(url, {
     params: {
       ...params,
       apiKey: API_KEY,
     },
     signal: controller.signal,
   });

   setData(response.data);
   setError(null);
   } 
   catch (error: any) {
    if(error.name === "AbortError") return;
    setError({
      message: error.response?.data?.message || error.message || "An error occurred",
      status: error.response?.status,
    });
   } 
   finally {
    setLoading(false);
   }
 };

  getDetails();

  return () => controller.abort();

 }, [url, JSON.stringify(params)]);

 return { data, loading, error };
};

export default useFetch;