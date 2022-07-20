import search_icon from './icons/search.jpg'

function Searchbar(props) {
    const language = props.language;
    function searchCourse(event) {
        if (event.key === "Enter" || event.type === "click") {
            const search = document.querySelector(".search-input");
            search.value = "";
        }
    }

    const text = (language === "English" || language === "Anglais")? "Search for a course" : "Rechercher un cours";
    return (
        <div className="searchbar">
            <input className="search-input" type="text" placeholder={text} onKeyPress={searchCourse} />
            <img id="search-icon" className="navbar-icon" src={search_icon} alt="search icon" onClick={searchCourse} />
        </div>
    );
}

export default Searchbar;