// import { useState } from "react";
import { z } from "zod";
import { IPCard } from "../index";
import styles from "./IPOverviewBox.module.css";
import { useEffect, useState } from "react";
import fetchIPDetails from "../../api/axios";

//so the ipaddress param is optional. when someone searches for an ip address, it should be available.
//but I want the users ip address to be displayed when the user opens the app. so without the ip address params, it defaults to the user's public IP address. 
//do i create two endpoints for it? 

//TODO3: define the zod schema that is needed in the get function
const IPDetailsSchema = z.object({
  ip: z.string().ip(),
  location: z.object({
    country: z.string(),
    region: z.string(),
    city: z.string(),
    lat: z.number(),
    lng: z.number(),
    postalCode: z.string(),
    timezone: z.string()
  }),
  as: z.object({ asn: z.number() }),
  isp: z.string()
});
 

const IPOverviewBox = () => {
  const [fetchedDetails, setFetchedDetails] = useState<object | undefined>();

  //Todo: The data I fetch should be in a useEffect
  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetchIPDetails(IPDetailsSchema);
      setFetchedDetails(data);
    }

    fetchData();
  }, []);

  return (
      <div className={styles.main}>
        <div className={styles.div}>
          {fetchedDetails && 
            <div>
              <IPCard title="IP ADDRESS" text={fetchedDetails.ip} />
              <hr />
              <IPCard title="LOCATION" text={`${fetchedDetails.location.city}, ${fetchedDetails.location.region} ${fetchedDetails.as.asn}`} />
              <hr />
              <IPCard title="TIMEZONE" text={`UTC${fetchedDetails.location.timezone}`} />
              <hr />
              <IPCard title="ISP" text={fetchedDetails.isp} />
            </div>
          }

          {/* TODO: do the empty state own late */}
            {/* <div>
              <IPCard title="IP ADDRESS" text="192.212.174.101" />
              <hr />
              <IPCard title="LOCATION" text="Brooklyn, NYC 10001" />
              <hr />
              <IPCard title="TIMEZONE" text="UTC-05:00" />
              <hr />
              <IPCard title="ISP" text="SpaceX Starlink" />
            </div> */}
        </div>
      </div>
  )
}

export default IPOverviewBox;
