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
            {/* 73 -> 81 204 270.5 338 400 */}
            {/* 81 226.5 300 346 408 */}
            {/* 8 22.5 29.5  */}
            <button className="navbar-buttons" onClick={() => ScrollScreen(66)}>About Us</button>
            <button className="navbar-buttons" onClick={() => ScrollScreen(184.5)}>Features</button>
            <button className="navbar-buttons" onClick={() => ScrollScreen(244.5)}>Host</button>
            <button className="navbar-buttons" onClick={() => ScrollScreen(304.5)}>Business</button>
            <button className="navbar-buttons" onClick={() => ScrollScreen(408)}>Careers</button>
          </div>
          <button className="navbar-waitlist-button" onClick={() => window.open("https://forms.gle/QBqkLtwDh7Uw5CCg6",
             "_blank")}>Join the Waitlist</button>
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
          <button className="navbar-waitlist-button" onClick={() => window.open("https://forms.gle/QBqkLtwDh7Uw5CCg6",
             "_blank")}>Join the Waitlist</button>
          </>
        )}
      </div>
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button className="navbar-buttons" onClick={() => ScrollScreen(37)}>About Us</button>
          <button className="navbar-buttons" onClick={() => ScrollScreen(84.5)}>Features</button>
          <button className="navbar-buttons" onClick={() => ScrollScreen(155)}>Host</button>
          <button className="navbar-buttons" onClick={() => ScrollScreen(200)}>Business</button>
          <button className="navbar-buttons" onClick={() => ScrollScreen(200)}>Careers</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
