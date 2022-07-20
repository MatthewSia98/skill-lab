import CategoryDropdown from './CategoryDropdown';
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom';

function Navbar() {
    let loggedInText = "Log In";

    if (localStorage.getItem("loggedIn") === 'true') loggedInText = "Logged In"

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
            <Link id="skill-lab" to="/home">SkillLab</Link>
            <div className="categories" onMouseOver={showOne} onMouseLeave={hideAll}>
                <p>Categories</p>
                <img id="down-arrow" className="navbar-icon" src={require("./icons/down-arrow.png")} alt="down arrow" />
            </div>
            <CategoryDropdown />
            <Searchbar />
            <a className="right-links" href="https://www.gofundme.com/en-ca" target="_">Donate</a>
            <Link className="login" to="/login"><button id="nav-login" className="light-button">{loggedInText}</button></Link>
        </nav> 
    );
}

export default Navbar;