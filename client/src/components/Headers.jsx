import React from "react";
import { useState, useEffect } from "react";
import "../styles/NavBar.css";
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Headers = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setNavbarClass("scrolled");
    } else {
      setNavbarClass("");
    }
  };
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`header-navbar ${navbarClass}`}>
      <Link to="/">
        <div className="logo">AnswerMe</div>
      </Link>
      <div className={`nav-links ${isMenuOpen ? "open-menu" : ""}`}>
        <div class="MENU-1">
          <label class="burger1" for="burger1">
            <input
              type="checkbox"
              id="burger1"
              checked={isMenuOpen}
              onChange={handleMenuToggle}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul>
          <Link to="/" onClick={handleLinkClick}>
            <a href="/">
              <li>Home</li>
            </a>
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            <a href="/client/src/components/About.jsx">
              <li>About</li>
            </a>
          </Link>
          <Link to="/docs" onClick={handleLinkClick}>
            <a href="/client/src/components/Documentation.jsx">
              <li>Docs</li>
            </a>
          </Link>
          <a href="https://github.com/adityassharma-ss/answerme" className="i">
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </a>
          <a href="https://twitter.com/aadityatwt" className="i">
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
