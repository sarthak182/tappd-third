import '../styles/footer-section.css';
import React, {useState, useEffect} from "react";
import instagramIcon from "../images/FooterInstagramLogo.png";
import linkedinIcon from "../images/FooterLinkedinLogo3x.png";
import twitterIcon from "../images/FooterTwitterLogo3x.png";
import logo from "../images/FooterTappdLogo3x.png";
function Footer() {
           const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        const maxWidth = 80;
        setWidth(scrollPercent * maxWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
        <>
        <div
      style={{
        height: "1.5px",
        width: `${width}%`,
        margin: "7vw auto 7vw auto",
        backgroundColor: "#404040",
        borderRadius: "0.56vw",
        transition: "width 0.1s ease-out",
      }}
    />

        <div className="footer-container-div">
        <div className="footer-left-div">
                <div className="footer-left-div-logo">
                    <img src={logo} alt="tappd-logo" className="footer-tappd-logo"/>
                </div>
                <div className="social">
                <button className="footer-social-links"><img className="footer-instagram-logo" src={instagramIcon} alt="instagram"/></button>
                <button className="footer-social-links"><img className="footer-linkedin-logo" src={linkedinIcon} alt="linkedin"/></button>
                <button className="footer-social-links"><img className="footer-twitter-logo" src={twitterIcon} alt="twitter"/></button>
                </div>
                <div className="footer-copyright-container">Copyright © 2025 by Tappd<br/>Pvt Ltd. All rights reserved.</div>
        </div>
        <div className="footer-right-div">
            <div className="footer-right-div-cont">
                <p className="footer-right-div-headings">Contact Us</p>
                <p className="footer-right-div-text">Sector 23, Gurgaon,<br/>India</p>
                <p className="footer-right-div-text">+91-8700890980</p>
                <p className="footer-right-div-text">hr@tappd.com</p>
            </div>
            <div className="footer-right-div-cont">
                <p className="footer-right-div-headings">Account</p>
                <p className="footer-right-div-text">Create Account</p>
                <p className="footer-right-div-text">Login Account</p>
                <p className="footer-right-div-text">IOS App</p>
                <p className="footer-right-div-text">Android App</p>
            </div>
            <div className="footer-right-div-cont">
                <p className="footer-right-div-headings">Company</p>
                <p className="footer-right-div-text">About Tappd</p>
                <p className="footer-right-div-text">For Business</p>
                <p className="footer-right-div-text">Tappd Partners</p>
                <p className="footer-right-div-text">Host at Tappd</p>
                <p className="footer-right-div-text">Careers</p>
            </div>
            <div className="footer-right-div-cont">
                <p className="footer-right-div-headings">Resources</p>
                <p className="footer-right-div-text">Help Center</p>
                <p className="footer-right-div-text">Privacy & Policy</p>
                <p className="footer-right-div-text">Terms & Conditions</p>
            </div>
        </div>
        </div>
    </>
  );
}

export default Footer;
