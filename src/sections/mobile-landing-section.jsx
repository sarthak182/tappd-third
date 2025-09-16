import '../styles/mobile-landing-section.css';
import firstimage_landingpage from "../images/LandingPageFirstImage.png";
import secondimage_landingpage from "../images/LandingPageSecondImage.png";
import thirdimage_landingpage from "../images/LandingPageThirdImage3x.png";
import firstglow from "../images/FirstGlow.png";
function MobileLanding() {
  return (
    <div className="mobile-tappd-website-container">
      <div className="mobile-container">
        <img 
        src={firstglow} 
        alt="glow"
        style={{
          position: "absolute",
          top: '47vw',
          left: '47vw',
          width: '95vw',
          height:"110vw",
          transform: "translate(-50%, -50%)",
          filter: "brightness(40%)",
          zIndex: -1
        }} 
      />
        <div className="mobile-text-section">
          <p className="mobile-heading">Stop Swiping &<br/>Start Meeting.</p>
          <p className="mobile-subtext">Tappd is the new social platform for discovering curated
            events and making authentic connections with people
            who share your interests. Real life, made easy</p>
          <div className="mobile-buttons-section">
            <button className ="mobile-waitlist-button">Join the Waitlist</button>
            <button className="mobile-explore-button">Explore Tappd</button>
          </div>
          <div className="mobile-reviews-section">
            <div className="mobile-first-review"><p className="mobile-review-heading">28+ million</p><p className="mobile-review-subtext">Personal Users</p></div>
            <div className="mobile-second-review"><p className="mobile-review-heading">500+</p><p className="mobile-review-subtext">Business Users</p></div>
            <div className="mobile-third-review"><p className="mobile-review-heading">200+</p><p className="mobile-review-subtext">In app currencies</p></div>
          </div>
        </div>
        <div className="mobile-images-section">
          <img className="mobile-first-image-landing-page" src={firstimage_landingpage} alt="example"/>
          <img className="mobile-second-image-landing-page" src={secondimage_landingpage} alt="example"/>
          <img className="mobile-third-image-landing-page" src={thirdimage_landingpage} alt="example"/>
        </div>
      </div>
      <img 
        src={firstglow} 
        alt="glow"
        style={{
          position: "absolute",
          top: '140vw',
          left: '50vw',
          width: '80vw',
          height:"110vw",
          transform: "translate(-50%, -50%)",
          filter: "brightness(40%)",
          zIndex: -1
        }} 
      />
    </div>
  );
}

export default MobileLanding;
