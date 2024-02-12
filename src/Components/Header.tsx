import React, { useRef, useState } from "react";
import brandLogo from "../assets/img/YouTube-Logo.wine.svg";
import SearchIcon from '../assets/img/search-icon.svg';
import voiceSearchIcon from "../assets/img/mic-11.svg";
import cameraIcon from "../assets/img/camera.svg";
import bellIcon from "../assets/img/bell-icon.svg"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [searchText , setSearchText] = useState<string>('');
  const form = useRef<HTMLFormElement>(null);

  const handleClick = () => {
    setSearchText('');
    if (form.current) {
      const input = form.current.querySelector('.header__searchbar-input') as HTMLInputElement;
      if (input) {
        input.value = '';
      }
    }
  };

  return (
    <header className='header'>
      <div className="header__left">
        <div className="header__hamburger">
          <span></span>
        </div>
        <Link to={"/"}>
          <img className="header__brand-logo" src={brandLogo} alt='brand-logo' />
        </Link>
      </div>
      <div className="header__center">
        <form className="header__searchbar" ref={form}>
          <div className="header__searchbar-holder">
            <input type="text" className='header__searchbar-input' placeholder="Search" onChange={(e)=>{setSearchText(e.target.value)}} />
            {
              searchText.length > 0 ? <span className="header__searchbar-clear" onClick={handleClick}></span> : null
            }
          </div>
          <button className="header__search-btn">
            <img src={SearchIcon} alt="searchIcon" className="header__searchicon" />
          </button>
        </form>
        <div className="header__voice-search" title="Search with your voice"><img src={voiceSearchIcon} alt="" className="header__voice-search-icon header-icon" /></div>
      </div>
      <div className="header__right">
        <ul className="header__features user-feature user-feature-upload">
          <li className="header__feature header-feature-video upload" title="Upload Video">
            <img src={cameraIcon} alt="camera-icon header-icon"  className="header__features-icon header-icon"/>
          </li>
          <li className="header__feature header-feature-notification notification-alert" title="Notifications">
            <img src={bellIcon} alt="bell-icon header-icon"  className="header__features-icon header-icon"/>
          </li>
          <li className="header__feature header-feature-profile user-profile" title="Notifications">
            <div className="user-profile-icon" title="User profile"></div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
