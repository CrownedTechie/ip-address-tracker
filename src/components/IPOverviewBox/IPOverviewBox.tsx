import { IPCard } from "../index";
import styles from "./IPOverviewBox.module.css";

const IPOverviewBox = () => {
  return (
    <main className={styles.main}>
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
    </main>
  )
}

export default IPOverviewBox;
