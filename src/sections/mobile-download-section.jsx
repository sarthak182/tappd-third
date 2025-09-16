import '../styles/mobile-download-section.css';
import tappdvector from "../images/TapToConnectVector3x.png";
import downloadnow from "../images/DownloadApp3x.png";
import bands from "../images/TappdBands3x.png";
import peopleicon from "../images/PeopleIcon.png";
import firstglow from "../images/FirstGlow.png";
function MobileDownloadPage() {
  return (
    <>
      <div className="mobile-download-page-wrapper">
        <div className="mobile-download-page-top-section">
        <button className="mobile-download-page-button">We Are Launching Soon</button>
        <div className="mobile-download-page-heading-wrapper">
        <p className="mobile-download-page-heading">Tap To Connect</p>
        <img src={tappdvector} className="mobile-download-page-heading-underline" alt="heading-underline"/>
        </div>
        </div>
            <img 
                                    src={firstglow} 
                                    alt="glow"
                                    style={{
                                      position: "absolute",
                                      width: '90vw',
                                      height:"auto",
                                      top:"760vw",
                                      left:"50vw",
                                      transform: "translate(-50%, -50%)",
                                      filter: "brightness(26%)",
                                      zIndex: -1
                                    }} 
                                  />
            <p className="mobile-download-page-subheading">The Future of Connection <br/>is a Simple Tap</p>
            <p className="mobile-download-page-subtext">Get ready for Phase 2. We're revolutionalising how you connect by bridging the gap between your 
              first handshake and your first chat. Our smart wearable tech will let you instantly and safely 
              exchange contact info with a mutual tap-no more awkward phone number requests.</p>
            <div className='mobile-download-page-email-container'>
              <input type="email" className="mobile-download-page-email-input" placeholder="Email"></input>
              <button className="mobile-download-page-email-button">Join The Waitlist</button>
            </div>
                <img src={peopleicon} className="mobile-download-page-joinnow-image" alt="tappd-joinnow"/>
                <p className='join-now-text'>Join the 12,500+ others on the waitlist!</p>
                <p className='join-now-text-yellow'>Stay tuned for the feature that will change networking forever.</p>
          <div className='mobile-download-section-content-image'>
                        <img 
                                    src={firstglow} 
                                    alt="glow"
                                    style={{
                                      position: "absolute",
                                      width: '100vw',
                                      height:"auto",
                                      top:"880vw",
                                      left:"50vw",
                                      transform: "translate(-50%, -50%)",
                                      filter: "brightness(32%)",
                                      zIndex: -1
                                    }} 
                                  />
            <img src={bands} className="mobile-download-bands-image" alt="tappd-bands"/>
          </div>
        <img src={downloadnow} className="mobile-final-download-now-image" alt="tappd-bands"/>
    </div>
    </>
  );
}

export default MobileDownloadPage;
