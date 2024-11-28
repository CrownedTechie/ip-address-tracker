import { Header, IPOverviewBox, Map } from "./components";

//I'll have to pass the props needed from here. Then probably use a state management system later to manage the values better

function App() {
  return (
    <>
      <Header />
      <IPOverviewBox />
      {/* <Map />    */}
    </>
  )
}

export default App;