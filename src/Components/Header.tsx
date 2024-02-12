import { useState } from "react"
import brandLogo from "../assets/img/YouTube-Logo.wine.svg"
import SearchIcon from '../assets/img/search-icon.svg';

function Header() {
  const [searchText , setSearchText] = useState('');
  return (
    <header className='header'>
      <div className="header__left">
        <div className="header__hamburger">
          <span></span>
        </div>
        <img className="header__brand-logo" src={brandLogo} alt='brand-logO' />
      </div>
      <div className="header__center">
        <form className="header__searchbar">
          <div className="header__searchbar-holder">
            <input type="text" className='header__searchbar-input' placeholder="Search" onChange={(e)=>{setSearchText(e.target.value)}} />
            {
              true ? <span className="header__searchbar-clear"></span> : null
            }
          </div>
          <button className="header__search-btn">
            <img src={SearchIcon} alt="searchIcon" className="header__searchicon" />
          </button>
        </form>
      </div>
      <div className="header__right"></div>
    </header>
  )
}

export default Header