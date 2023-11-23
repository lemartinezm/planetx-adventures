import { useState } from "react";
import MenuSvg from "../icons/menu/Menu";
import "./styles.css";

export default function Header() {
  const [isOpenNavbar, setIsOpenNavbar] = useState<boolean>(false);
  return (
    <header className="header-container">
      <h1 className="header-title">
        <a href="/#home">PlanetX Adventures</a>
      </h1>
      <nav className="header-navbar">
        <ul
          className={
            isOpenNavbar ? "header-navlinks active" : "header-navlinks"
          }
        >
          <li>
            <a
              href="/#about"
              onClick={() => setIsOpenNavbar(false)}
              className="navlink"
            >
              About camp
            </a>
          </li>
          <li>
            <a
              href="/#events"
              onClick={() => setIsOpenNavbar(false)}
              className="navlink"
            >
              Events
            </a>
          </li>
          <li>
            <a href="/sign" className="navlink signin">
              Sign in
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-container">
        <MenuSvg
          isOpen={isOpenNavbar}
          onClick={() => setIsOpenNavbar((val) => !val)}
        />
      </div>
    </header>
  );
}
