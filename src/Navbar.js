import CategoryDropdown from './CategoryDropdown';
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="left-links-div">
                <Link id="skill-lab" to="/">SkillLab</Link>
                <CategoryDropdown />
            </div>

            <Searchbar />

            <div className="right-links-div">
                <Link className="right-links" to="/course">Online Degrees</Link>
                <a className="right-links" href="https://www.gofundme.com/en-ca" target="_">Donate</a>
                <Link className="login" to="/login"><button className="light-button">Log In</button></Link>
            </div>
        </nav> 
    );
}

export default Navbar;