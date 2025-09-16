import '../styles/landing-section.css';
import firstimage_landingpage from "../images/LandingPageFirstImage.png";
import secondimage_landingpage from "../images/LandingPageSecondImage.png";
import thirdimage_landingpage from "../images/LandingPageThirdImage3x.png";
import firstglow from "../images/FirstGlow.png";
function Landing() {
  return (
    <div className="tappd-website-container">
      <div className="container">
        <img 
        src={firstglow} 
        alt="glow"
        style={{
          position: "absolute",
          top: '52vw',
          left: '47vw',
          width: '95vw',
          height:"110vw",
          transform: "translate(-50%, -50%)",
          filter: "brightness(40%)",
          zIndex: -1
        }} 
      />
        <div className="text-section">
          <p className="heading">Stop Swiping &<br/>Start Meeting.</p>
          <p className="subtext">Tappd is the new social platform for discovering curated<br/>
            events and making authentic connections with people<br/>
            who share your interests. Real life, made easy</p>
          <div className="buttons-section">
            <button className ="waitlist-button">Join the Waitlist</button>
            <button className="explore-button">Explore Tappd</button>
          </div>
          <div className="reviews-section">
            <div className="first-review"><p className="review-heading">28+ million</p><p className="review-subtext">Personal Users</p></div>
            <div className="second-review"><p className="review-heading">500+</p><p className="review-subtext">Business Users</p></div>
            <div className="third-review"><p className="review-heading">200+</p><p className="review-subtext">In app currencies</p></div>
          </div>
        </div>
        <div className="images-section">
          <img className="first-image-landing-page" src={firstimage_landingpage} alt="example"/>
          <img className="second-image-landing-page" src={secondimage_landingpage} alt="example"/>
          <img className="third-image-landing-page" src={thirdimage_landingpage} alt="example"/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
