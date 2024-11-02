import "./App.css";
import { Header } from "./components";

function App() {

  return (
    <>
      <Header />

      <main>
        <div>
          <div>
            <h6>IP ADDRESS</h6>
            <p>192.212.174.101</p>
          </div>
          <div>
            <h6>LOCATION</h6>
            <p>Brooklyn, NYC 10001</p>
          </div>
          <div>
            <h6>TIMEZONE</h6>
            <p>UTC-05:00</p>
          </div>
          <div>
            <h6>ISP</h6>
            <p>SpaceX Starlink</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
