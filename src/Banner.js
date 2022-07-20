import home from './images/home.jpg';
import { Link } from 'react-router-dom';
import { scroller } from "react-scroll";

function Banner(props) {
    function browsePopular(event) {
      event.preventDefault();
      scroller.scrollTo("tabs", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
      })
    }

    const language = props.language;
    const slogan = (language === "English" || language === "Anglais")? "Limitless Learning" : "Apprentissage illimité";
    const text1 = (language === "English" || language === "Anglais")? "Supercharge your learning by picking from our selection of over 5,000 courses and 150,000 videos" : "Boostez votre apprentissage en choisissant parmi notre sélection de plus de 5 000 cours et 150 000 vidéos";
    const btn1Text = (language === "English" || language === "Anglais")? "Try for Free" : "Essayer gratuitement";
    const btn2Text = (language === "English" || language === "Anglais")? "Browse popular courses" : "Parcourir les cours populaires";

    return (
        <div className="banner">
        <img src={ home } alt="home banner" />
        <div className="banner-card">
          <div className="slogan-div"><p className="slogan">{slogan}</p></div>
          <div className="banner-inner-card">
            <p>{text1}</p>
            <div className="banner-buttons">
              <Link to="/login"><button className="light-button">{btn1Text}</button></Link>
              <button id="popular-courses-btn" className="dark-button" onClick={browsePopular}>{btn2Text}</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;