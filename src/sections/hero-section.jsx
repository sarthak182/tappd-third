import '../styles/hero-section.css';
// import first_hero_image from "../images/HeroPageFirstImage3x.png";
// import second_hero_image from "../images/HeroPageSecondImage3x.png";
// import third_hero_image from "../images/HeroPageThirdImage3x.png";
// import firstglow from "../images/FirstGlow.png";
function HeroPage() {
  return (
    <>
      <div className='hero-section'>
        <button className='hero-page-working-button'>How it works</button>
        <p className="hero-section-heading">Real Connections in 3 Simple Steps</p>
          <div className='hero-section-cards'>
            <div className='hero-first-card'>
              <div className="hero-first-card-text">
                <img className='hero-first-glow'src="/images/FirstGlow.png" alt="glow"/>
                <p className="hero-first-heading">01</p>
                <p className="hero-first-card-title">Discover Your Scene</p>
                <p className="hero-first-card-subtext">
                  Browse a curated feed of events tailored to your passions. <br className='mobile-break'/>
                  From tech talks and art walks to sports meetups, <br className='mobile-break'/>
                  find what moves you.
                </p>
              </div>
              <div>
                <img className="first_hero_image" src="/images/HeroPageFirstImage3x.png" alt="first-hero"/>
              </div>
            </div>
            <div className='hero-second-card'>
              <div>
                <img className="second_hero_image" src="/images/HeroPageSecondImage3x.png" alt="second-hero" />
              </div>
              <div className="hero-second-card-text">
                <img className='hero-second-glow'
                        src="/images/FirstGlow.png" 
                        alt="glow" 
                      />
                <p className="hero-second-heading">02</p>
                <p className="hero-second-card-title">Join With Confidence</p>
                <p className="hero-second-card-subtext">
                  RSVP to events with verified hosts and see who else is going. <br className='mobile-break'/>
              Our safety-first features, including optional ID verification, <br className='mobile-break'/>
              help build a trusted community.
                </p>
              </div>
            </div>
            <div className='hero-third-card'>
              <div className="hero-third-card-text">
                <img className='hero-third-glow'
                        src="/images/FirstGlow.png" 
                        alt="glow" 
                      />
                <p className="hero-third-heading">03</p>
                <p className="hero-third-card-title">Build Your Circle</p>
                <p className="hero-third-card-subtext">
                  Attend events, share experiences and make genuine <br className='mobile-break'/>
              connections. Tappd is the bridge between online discovery <br className='mobile-break'/>
              and offline community..
                </p>
              </div>
              <div>
                <img className="third_hero_image" src="/images/HeroPageThirdImage3x.png" alt="third-hero"/>
              </div>
            </div >
          </div>
      </div>
    </>
  );
}

export default HeroPage;
