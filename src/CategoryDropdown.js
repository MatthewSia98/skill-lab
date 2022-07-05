import DropdownMenu from './DropdownMenu';

function CategoryDropdown() {
    window.addEventListener("load", positionDropdown);
    window.addEventListener("resize", positionDropdown);

    function positionDropdown() {
        const categories = document.querySelector(".categories");
        const dropdown = document.querySelector(".dropdown-container");
        const categoriesRect = categories.getBoundingClientRect();
        dropdown.style.left = `${categoriesRect.x}px`;
        dropdown.style.top = `${categoriesRect.bottom + 10}px`;
    }

    const dict = {"Development": {"Data Science": ["Python", "Machine Learning", "Deep Learning", "Data Analysis", "R", "Statistics", "Natural Language Processing"]
                           }
           };
                               

    return (
        <div className="dropdown-container">
            <DropdownMenu items={dict} />
        </div>
    );
}

export default CategoryDropdown;