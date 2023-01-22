import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// import images
import HeaderLogo from "../assets/images/logo.png";
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const setHandleMenu = () => {
    setMenuOpen((even) => !even);
  };

  return (
    <header className="header fixed top-0 left-0 z-30 w-full bg-white">
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="header__logo inline-flex items-center gap-2 text-[20px] font-bold text-gray-900"
        >
          <img
            src={HeaderLogo}
            alt="header logo"
            className="header__logo-icon w-8"
          />
          Foodyar
        </Link>

        <div
          className={`header__menu fixed top-24 left-0 w-full origin-top bg-white py-8 px-12 text-center shadow-md transition-all duration-400 ${
            menuOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <ul className="header__list mb-6 flex flex-col gap-6">
            {[
              ["About Us", "/about-us"],
              ["Beverages", "/beverages"],
              ["Chef", "/chef"],
              ["Ingredients", "/ingredients"],
              ["Stories", "/stories"],
            ].map(([title, url]) => (
              <li key={url}>
                <Link
                  to={url}
                  className="header__link font-semibold text-gray-900 hover:text-pink-200"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Button url="/sign-up">My Account</Button>
        </div>

        <div
          className="header__toggle inline-flex cursor-pointer p-1 text-[1.3rem] text-gray-900"
          onClick={setHandleMenu}
        >
          {!menuOpen ? <RiMenu3Line /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
}