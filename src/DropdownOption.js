import { Link } from 'react-router-dom';

function DropdownOption(props) {
    if (props.arrow) {
        return (
            <div className="dropdown-option">
                <Link className="dropdown-name" to="/course">{props.name}</Link>
                <img className="dropdown-arrow" src={require("./icons/right-arrow.jpg")} alt="right arrow" />
            </div>
        );
    } else {
        return (
            <div className="dropdown-option">
                <Link className="dropdown-name" to="/course">{props.name}</Link>
            </div>
        );
    }
}

export default DropdownOption;