import DropdownMenu from './DropdownMenu';

function CategoryDropdown() {
    /*
    window.addEventListener("load", positionDropdown);
    window.addEventListener("resize", positionDropdown);
    window.addEventListener('DOMContentLoaded', positionDropdown);
    window.addEventListener('focus', positionDropdown);
    window.addEventListener('hashchange', positionDropdown);
    window.addEventListener('pageshow', positionDropdown);

    function positionDropdown() {
        const categories = document.querySelector(".categories");
        const dropdown = document.querySelector(".dropdown-container");
        const categoriesRect = categories.getBoundingClientRect();
        dropdown.style.left = `${categoriesRect.x}px`;
        dropdown.style.top = `${categoriesRect.bottom + 10}px`;
    }                               
*/
    return (
            <DropdownMenu />
    );
}

export default CategoryDropdown;