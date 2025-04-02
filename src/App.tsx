import { useState } from "react";
import { Header, IPOverviewBox } from "./components";
import { useDebounceValue } from 'usehooks-ts';

function App() {
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