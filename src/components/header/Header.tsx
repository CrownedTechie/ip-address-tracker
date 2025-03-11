import arrowIcon from "../../assets/icon-arrow.svg";
import headerStyles from "./header.module.css";


type HeaderProps = {
  searchValue: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({searchValue, handleSearch}:HeaderProps) => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.headerText}>IP Address Tracker</h1>

      <fieldset className={headerStyles.headerSearchBox}>
        <input 
          type="text" 
          value={searchValue}
          onChange={handleSearch}
        />

        {/* //Todo: put an onclick functionality here */}
        <div>
          <img src={arrowIcon} alt="arrow icon" />
        </div>
      </fieldset>
    </header>
  )
};

export default Header;
