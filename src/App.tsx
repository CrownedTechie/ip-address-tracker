import { useState } from "react";
import { Header, IPOverviewBox } from "./components";
import { useDebounceValue } from 'usehooks-ts';
//I'll have to pass the props needed from here. 

function App() {
  //Todo: manage the searchValue state here with useState. Pass the searchvalue to the header and the Ipoverview Box
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useDebounceValue("", 500);

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
    setDebouncedSearchTerm(value);
  };

  return (
    <>
      <Header searchValue={searchTerm} handleSearch={handleSearchTerm} />
      <IPOverviewBox searchValue={debouncedSearchTerm} />
    </>
  )
}

export default App;