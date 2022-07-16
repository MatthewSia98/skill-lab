import home from './images/home.jpg';
import { Link } from 'react-router-dom';
import { scroller } from "react-scroll";

function Banner() {
    function browsePopular(event) {
      event.preventDefault();
      scroller.scrollTo("tabs", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
      })
    }

    return (
        <div className="banner">
        <img src={ home } alt="home banner" />
        <div className="banner-card">
          <div className="slogan-div"><p className="slogan">Limitless Learning</p></div>
          <div className="banner-inner-card">
            <p>Supercharge your learning by picking from our selection of over 5,000 courses and 150,000 videos</p>
            <div className="banner-buttons">
              <Link to="/login"><button className="light-button">Try for Free</button></Link>
              <button id="popular-courses-btn" className="dark-button" onClick={browsePopular}>Browse popular courses</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;