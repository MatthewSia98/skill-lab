import down_arrow from './icons/down-arrow.png';
import DropdownMenu from './DropdownMenu';

function CategoryDropdown() {
    return (
        <div className="dropdown">
            <div className="categories">
                <p>Categories</p>
                <img id="down-arrow" className="navbar-icon" src={ down_arrow } alt="down arrow" />
            </div>
            <DropdownMenu />
        </div>
    );
}

export default CategoryDropdown;