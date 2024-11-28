// import { useState } from "react";
import { IPCard } from "../index";
import styles from "./IPOverviewBox.module.css";
// import { axiosInstance } from '../../api/axios';
import axios from "axios";


// export const API_KEY = "apiKey=at_OnpuI5H6sjJjQyTFJafQ0hAown9Wt";
// https://geo.ipify.org/api/v2/country,city?apiKey=at_OnpuI5H6sjJjQyTFJafQ0hAown9Wt&ipAddress=8.8.8.8

//so the ipaddress param is optional. when someone searches for an ip address, it should be available.
//but I want the users ip address to be displayed when the user opens the app. so without the ip address params, it defaults to the user's public IP address. 
//do i create two endpoints for it? 

//TODO3: define the zod schema that is needed in the get function


const IPOverviewBox = () => {
  // const [data, setData] = useState(null);

  //Todo: The data I fetch should be in a useEffect
  const fetchData = async () => {
    try {
      const response = await axios.get('');
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  };

  fetchData();


  return (
      <div className={styles.main}>
        <div className={styles.div}>
          <div>
              <IPCard title="IP ADDRESS" text="192.212.174.101" />
              <hr />
              <IPCard title="LOCATION" text="Brooklyn, NYC 10001" />
              <hr />
              <IPCard title="TIMEZONE" text="UTC-05:00" />
              <hr />
              <IPCard title="ISP" text="SpaceX Starlink" />
          </div>
        </div>
      </div>
  )
}

export default IPOverviewBox;
