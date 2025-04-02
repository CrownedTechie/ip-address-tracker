import { z } from "zod";
import { IPCard, Map } from "../index";
import styles from "./IPOverviewBox.module.css";
import useFetch from "../../hooks/useFetch";

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

type IPDetails = z.infer<typeof IPDetailsSchema>;

type IPOverviewBoxProps = {
  searchValue: string;
}

const IPOverviewBox = ({searchValue}: IPOverviewBoxProps) => {
  const params = searchValue ? { ipAddress: searchValue} : undefined;
  const { data } = useFetch<IPDetails>({
    url:'/country,city', 
    params
  });

  // Validating my fetched data
  const validatedData = data ? IPDetailsSchema.safeParse(data) : null;
  const fetchedDetails = validatedData?.success ? validatedData.data : null;

  return (
    <>
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
        </div>
      </div>

      {fetchedDetails && <Map lat={fetchedDetails?.location.lat} lng={fetchedDetails?.location.lng}/> }
    </>
  )
}

export default IPOverviewBox;
