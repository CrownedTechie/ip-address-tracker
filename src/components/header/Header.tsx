import arrowIcon from "../../assets/icon-arrow.svg";
import headerStyles from "./header.module.css";


const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.headerText}>IP Address Tracker</h1>

      <fieldset className={headerStyles.headerSearchBox}>
        <input type="text" name="" id="" />

        <div>
          <img src={arrowIcon} alt="arrow icon" />
        </div>
      </fieldset>
    </header>
  )
}

export default Header;
