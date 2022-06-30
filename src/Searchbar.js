import search_icon from './icons/search.jpg'

function Searchbar() {
    function searchCourse(event) {
        if (event.key === "Enter" || event.type === "click") {
            const search = document.querySelector(".search-input");
            search.value = "";
        }
    }

    return (
        <div className="searchbar">
            <input className="search-input" type="text" placeholder="Search for a course" onKeyPress={searchCourse} />
            <img id="search-icon" className="navbar-icon" src={search_icon} onClick={searchCourse} />
        </div>
    );
}

export default Searchbar;