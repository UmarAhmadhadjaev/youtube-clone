import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header flex justify-between items-center h-16">
      <div className="header__left flex items-center">
        <i id="menu" className="material-icons">
          menu
        </i>
        <img
          className="w-24 ml-4"
          src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
          alt=""
        />
      </div>

      <div className="header__search">
        <form className="m-0 p-0 flex h">
          <input className="m-0 rounded h-full" type="text" placeholder="Search" />
          <button className="p-0 m-0 h-full">
            <i className="material-icons">search</i>
          </button>
        </form>
      </div>

      <div className="header__icons">
        <i className="material-icons display-this">search</i>
        <i className="material-icons">videocam</i>
        <i className="material-icons">apps</i>
        <i className="material-icons">notifications</i>
        <i className="material-icons display-this">account_circle</i>
      </div>
    </header>
  );
};

export default Header;
