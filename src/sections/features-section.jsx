import "../styles/features-section.css";
import firstglow from "../images/FirstGlow.png";
import firstfeature from "../images/UpperSectionLeftFeature.png";
import secondfeature from "../images/UpperSectionRightFeature.png";
import thirdfeature from "../images/LowerSectionLeftFeature.png";
import fourthfeature from "../images/LowerSectionRightFeature.png";
function FeaturePage(){
    return (
        <>
        <div className='features'>
            <img className="features-first-glow"
                        src={firstglow} 
                        alt="glow"
                      />
            <img className="features-second-glow"
                        src={firstglow} 
                        alt="glow"
                      />
          <div className="tappd-features-wrapper">
            <div className="tappd-features-section">
            <button className="tappd-features-button">Tappd features</button>
            <p className="tappd-features-heading">The Safer, Smarter way to Socialise</p>
            <p className="tappd-features-subtext">Stop wondering where to meet like minded people. Our platform helps you discover and create events based on <br/>
              shared interests, ensuring you're always in good company.</p>
            </div>
            <div className="tappd-features">
              <div className="tappd-features-upper-section">
                <div className="tappd-features-upper-section-first-cont">
                  <img src={firstfeature} alt="first-icon" className="upper-section-left-image"/>
                  <p className="tappd-features-section-heading">Curated & Interest-Based Events</p>
                  <p className="tappd-features-subtext">Stop wondering where to meet like minded people. Our <br/>platform helps you discover and create events based on <br/>
                    shared interests, ensuring you're always in good company.</p>
                </div>
                <div className="tappd-features-upper-section-second-cont">
                  <img src={secondfeature} alt="second-icon" className="upper-section-right-image"/>
                  <p className="tappd-features-section-heading">Meet with Peace of Mind</p>
                  <p className="tappd-features-subtext">Stop wondering where to meet like minded people. Our platform helps you discover <br/>and create events based on
                    shared interests, ensuring you're always in good<br/> company.</p>
                </div>
              </div>
              <div className="tappd-features-lower-section">
                <div className="tappd-features-lower-section-first-cont">
                  <img src={thirdfeature} alt="third-icon" className="lower-section-left-image"/>
                  <p className="tappd-features-section-heading">QR Code to Scan & Connect</p>
                  <p className="tappd-features-subtext">Stop wondering where to meet like minded people. Our platform helps you discover <br/>and create events based on
                    shared interests, ensuring you're always in good<br/> company.</p>
                </div>
                <div className="tappd-features-lower-section-second-cont">
                  <img src={fourthfeature} alt="fourth-icon" className="lower-section-right-image"/>
                  <p className="tappd-features-section-heading">Host or Join. It's Your Call.</p>
                  <p className="tappd-features-subtext">Have a great idea for a meetup? Our simple tools make it easy<br/> to host your own event. Prefer to
                    join? RSVP in one click and get <br/>ready to connect.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
          </>
    )
}
export default FeaturePage;