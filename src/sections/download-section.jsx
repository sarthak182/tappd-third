import '../styles/download-section.css';
import tappdvector from "../images/TapToConnectVector3x.png";
import downloadnow from "../images/DownloadApp3x.png";
import bands from "../images/TappdBands3x.png";
import peopleicon from "../images/JoinNowComplete3x.png";
import firstglow from "../images/FirstGlow.png";
function DownloadPage() {
  return (
    <>
      <div className="download-page-wrapper">
        <div className="download-page-top-section">
        <button className="download-page-button">We Are Launching Soon</button>
        <div className="download-page-heading-wrapper">
        <p className="download-page-heading">Tap To Connect</p>
        <img src={tappdvector} className="download-page-heading-underline" alt="heading-underline"/>
        </div>
        </div>
        <div className='download-section-content'>
          <div className='download-section-content-text'>
            <img 
                                    src={firstglow} 
                                    alt="glow"
                                    style={{
                                      position: "absolute",
                                      width: '50vw',
                                      height:"auto",
                                      top:"327vw",
                                      left:"8vw",
                                      transform: "translate(-50%, -50%)",
                                      filter: "brightness(24%)",
                                      zIndex: -1
                                    }} 
                                  />
            <p className="download-page-subheading">The Future of Connection <br/>is a Simple Tap</p>
            <p className="download-page-subtext">Get ready for Phase 2. We're revolutionalising how you connect by<br/>bridging the gap between your 
              first handshake and your first chat. Our<br/>smart wearable tech will let you instantly and safely 
              exchange contact<br/>info with a mutual tap-no more awkward phone number requests.</p>
            <div className='download-page-email-container'>
              <input type="email" className="download-page-email-input" placeholder="Email"></input>
              <button className="download-page-email-button">Join The Waitlist</button>
            </div>
            <img src={peopleicon} className="download-page-joinnow-image" alt="tappd-joinnow"/>
          </div>
          <div className='download-section-content-image'>
                        <img 
                                    src={firstglow} 
                                    alt="glow"
                                    style={{
                                      position: "absolute",
                                      width: '80vw',
                                      height:"auto",
                                      top:"351vw",
                                      left:"70vw",
                                      transform: "translate(-50%, -50%)",
                                      filter: "brightness(28%)",
                                      zIndex: -1
                                    }} 
                                  />
            <img src={bands} className="download-bands-image" alt="tappd-bands"/>
          </div>
        </div>
        <img src={downloadnow} className="final-download-now-image" alt="tappd-bands"/>
    </div>
    </>
  );
}

export default DownloadPage;
