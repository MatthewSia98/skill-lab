import CategoryDropdown from './CategoryDropdown';
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom';

function Navbar() {
    let loggedInText = "Log In";

    if (localStorage.getItem("loggedIn") === 'true') loggedInText = "Logged In"

    function setLanguage(event) {
        console.log(event.target.textContent);
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

    return (
        <nav className="navbar">
            <div className="left-nav">
                <Link id="skill-lab" to="/home">SkillLab</Link>
                <div className="categories" onMouseEnter={showOne} onMouseLeave={hideAll}>
                    <p>Categories</p>
                    <img id="down-arrow" className="navbar-icon" src={require("./icons/down-arrow.png")} alt="down arrow" />
                    <CategoryDropdown />
                </div>
            </div>
            <Searchbar />
            <div className="right-nav">
                <div className="language-dropdown">
                    <div className="language-text">
                        <p>Language</p>
                        <img id="down-arrow" className="navbar-icon" src={require("./icons/down-arrow.png")} alt="down arrow" />
                    </div>
                    <div className="language-options">
                        <button onClick={setLanguage}>English</button>
                        <button onClick={setLanguage}>French</button>
                    </div>
                </div>
                <a className="donate" href="https://www.gofundme.com/en-ca" target="_">Donate</a>
                <Link className="login" to="/login"><button id="nav-login" className="light-button">{loggedInText}</button></Link>
            </div>
        </nav> 
    );
}

export default Navbar;