import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="">
      <nav>
        <div class="nav__header">
          <div class="nav__logo">
            <a href="#">RENTAL</a>
          </div>
          <div
            className={`nav__menu__btn`}
            id="menu-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <i class="ri-close-large-line"></i>
            ) : (
              <i class="ri-menu-line"></i>
            )}
          </div>
        </div>
        <ul
          className={`nav__links ${
            showMenu ? "transform translate-y-[100%]" : ""
          }`}
          id="nav-links"
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#rent">Rent</a>
          </li>
          <li>
            <a href="#ride">Ride</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div class="nav__btn">
          <button class="btn">Get Started</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
