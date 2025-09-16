import { useState, useEffect } from "react";
import '../styles/navbar-section.css';
import { FaBars, FaTimes } from "react-icons/fa";
import navbarlogo from "../images/NavbarLogo.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const ScrollScreen = (remAmount) => {
    const pixels = remAmount * parseFloat(getComputedStyle(document.documentElement).fontSize);
    window.scrollBy({
      top: pixels,
      left: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <img className="navbar-logo" src={navbarlogo} alt="example" />
        {!isMobile && (
          <>
          <div className="navbar-buttons-section">
            <button className="navbar-buttons" onClick={() => ScrollScreen(68)}>About Us</button>
            <button className="navbar-buttons" onClick={() => ScrollScreen(186)}>Features</button>
            <button className="navbar-buttons" onClick={() => ScrollScreen(249)}>Host</button>
            <button className="navbar-buttons" onClick={() => ScrollScreen(302)}>Business</button>
            <button className="navbar-buttons" onClick={() => ScrollScreen(500)}>Careers</button>
          </div>
          <button className="navbar-waitlist-button">Join the Waitlist</button>
                  </>
        )}
        {isMobile && (
          <>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes style={{ width: '4.3vw', height: '4.3vw' }} /> : 
            <FaBars style={{ width: '4.3vw', height: '4.3vw' }}  />}
          </button>
          <button className="navbar-waitlist-button">Join the Waitlist</button>
          </>
        )}
      </div>
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button className="navbar-buttons" onClick={() => ScrollScreen(68)}>About Us</button>
          <button className="navbar-buttons" onClick={() => ScrollScreen(186)}>Features</button>
          <button className="navbar-buttons" onClick={() => ScrollScreen(249)}>Host</button>
          <button className="navbar-buttons" onClick={() => ScrollScreen(302)}>Business</button>
          <button className="navbar-buttons" onClick={() => ScrollScreen(500)}>Careers</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
