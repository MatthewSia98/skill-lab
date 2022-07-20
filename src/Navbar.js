import CategoryDropdown from './CategoryDropdown';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const language = props.language;
    let loggedInText;

    if (language === "English" || language === "Anglais") {
        if (localStorage.getItem("loggedIn") === 'true') loggedInText = "Account";
        else loggedInText = "Log In";
    }

    if (language === "French" || language === "Français") {
        if (localStorage.getItem("loggedIn") === 'true') loggedInText = "Compte";
        else loggedInText = "Connexion";
    }

    function handleLanguage(event) {
        const clicked = event.target.textContent;

        if (clicked === "English" || clicked === "Anglais") localStorage.setItem("language", "English");
        else localStorage.setItem("language", "French");
    }

    function showOne() {
        document.querySelector(".dropdown-column.one").style.display = "flex"
        document.querySelector(".dropdown-column.two").style.display = "none"
        document.querySelector(".dropdown-column.three").style.display = "none"
    }

    function hideAll(event) {
        const mouseX  = event.clientX;
        const categoriesRect = document.querySelector(".categories").getBoundingClientRect();

        if (mouseX < categoriesRect.left || mouseX > categoriesRect.right) {
            document.querySelector(".dropdown-column.one").style.display = "none";
            document.querySelector(".dropdown-column.two").style.display = "none";
            document.querySelector(".dropdown-column.three").style.display = "none";
        }
    }

    const categoryText = (language === "English" || language === "Anglais")? "Category" : "Catégorie";
    const languageText = (language === "English" || language === "Anglais")? "English" : "Français";
    const language1 = (language === "English" || language === "Anglais")? "English" : "Anglais";
    const language2 = (language === "English" || language === "Anglais")? "French" : "Français";
    const donateText = (language === "English" || language === "Anglais")? "Donate" : "Faire un don";

    return (
        <nav className="navbar">
            <div className="left-nav">
                <Link id="skill-lab" to="/home">SkillLab</Link>
                <div className="categories" onMouseEnter={showOne} onMouseLeave={hideAll}>
                    <p>{categoryText}</p>
                    <img id="down-arrow" className="navbar-icon" src={require("./icons/down-arrow.png")} alt="down arrow" />
                    <CategoryDropdown />
                </div>
            </div>
            <Searchbar language={language}/>
            <div className="right-nav">
                <div className="language-dropdown">
                    <div className="language-text">
                        <p>{languageText}</p>
                        <img id="down-arrow" className="navbar-icon" src={require("./icons/down-arrow.png")} alt="down arrow" />
                    </div>
                    <div className="language-options">
                        <button onClick={handleLanguage}>{language1}</button>
                        <button onClick={handleLanguage}>{language2}</button>
                    </div>
                </div>
                <a className="donate" href="https://www.gofundme.com/en-ca" target="_">{donateText}</a>
                <Link className="login" to="/login"><button id="nav-login" className="light-button">{loggedInText}</button></Link>
            </div>
        </nav> 
    );
}

export default Navbar;