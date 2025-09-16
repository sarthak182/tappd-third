import React, { useState, useEffect } from "react";
import './App.css';
import Landing from "./sections/landing-section";
import MobileLanding from './sections/mobile-landing-section';
import Navbar from "./sections/navbar-section";
import HeroPage from "./sections/hero-section";
import Footer from "./sections/footer-section";
import DownloadPage from "./sections/download-section";
import MobileDownloadPage from "./sections/mobile-download-section.jsx";
import FeaturesPage from "./sections/features-section";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <Navbar />
      {isMobile ? <MobileLanding /> : <Landing />}
      <HeroPage />
      <FeaturesPage />
      {isMobile ? <MobileDownloadPage />:<DownloadPage/>}
      <Footer />
    </>
  );
}

export default App;
