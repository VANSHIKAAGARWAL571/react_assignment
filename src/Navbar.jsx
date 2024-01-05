// Navbar.jsx

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        onClick={scrollToTop}
        className="site-title"
      >
        Dunagiri
      </Link>
      <ul>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
