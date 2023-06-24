import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div className="fullHeaderContainer">
      <div className="headerContainer">
        <div>
          <p className="name">Lea Castanet</p>
        </div>
        <div className="buttonContainer">
          <Link to="/" className="linkHeader">
            <p className="buttonHeader">Home</p>
          </Link>

          <Link to="/education" className="linkHeader">
            <p className="buttonHeader">Education</p>
          </Link>

          <Link to="/projects" className="linkHeader">
            <p className="buttonHeader">Projects</p>
          </Link>

          <Link to="/contact" className="linkHeader">
            <p className="buttonHeaderContact">Contact and Resume</p>
          </Link>
        </div>
      </div>
      <div className="menuContainer">
        <button onClick={handleOpen} className="fontAwsomeIconContainer">
          <FontAwesomeIcon icon="bars" className="fontAwsomeIcon" />
        </button>
        {open ? (
          <ul className="menu">
            <li className="menuItem">
              <Link to="/" className="menuLink">
                <button onClick={handleMenuClose} className="menuButton">
                  Home
                </button>
              </Link>
            </li>
            <li className="menuItem">
              <Link to="/education" className="menuLink">
                <button onClick={handleMenuClose} className="menuButton">
                  Education
                </button>
              </Link>
            </li>
            <li className="menuItem">
              <Link to="/projects" className="menuLink">
                <button onClick={handleMenuClose} className="menuButton">
                  Projects
                </button>
              </Link>
            </li>
            <li className="menuItem">
              <Link to="/contact" className="menuLink">
                <button onClick={handleMenuClose} className="menuButton">
                  Contact and Resume
                </button>
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
