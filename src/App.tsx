import { useState } from "react";
import { Header, IPOverviewBox } from "./components";

//I'll have to pass the props needed from here. 



function App() {
  //Todo: manage the searchValue state here with useState. Pass the searchvalue to the header and the Ipoverview Box
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // console.log(searchTerm);

  return (
    <>
      <Header searchValue={searchTerm} handleSearch={handleSearchTerm}/>
      <IPOverviewBox ipAddress={searchTerm}/>
    </>
  )
}

export default App;