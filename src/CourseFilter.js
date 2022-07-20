import { levels } from './App';

function CourseFilter(props) {
    const language = props.language;
    function applyFilters() {
        const beginner = document.querySelector("#beginner-checkbox").checked;
        const intermediate = document.querySelector("#intermediate-checkbox").checked;
        const advanced = document.querySelector("#advanced-checkbox").checked;
        const courseCards = [...document.querySelectorAll(".course-card")];

        for (let i = 0; i < courseCards.length; i++) {
            const curr = courseCards[i];
            const name = curr.className.split(' ')[1];
            const level = levels[name];
            if (beginner || intermediate || advanced) {
                if (level === "Beginner") {
                    if (beginner) curr.style.display = "flex";
                    else curr.style.display = "none";
                } else if (level === "Intermediate") {
                    if (intermediate) curr.style.display = "flex";
                    else curr.style.display = "none";
                } else if (level === "Advanced") {
                    if (advanced) curr.style.display = "flex";
                    else curr.style.display = "none";
                }
            } else {
                curr.style.display = "flex";
            }
        }
    }

    const header = (language === "English" || language === "Anglais")? "Filter Courses" : "Filtrer les cours";
    const beginnerText = (language === "English" || language === "Anglais")? "Beginner" : "Débutant(e)";
    const intermediateText = (language === "English" || language === "Anglais")? "Intermediate" : "Intermédiaire";
    const advancedText = (language === "English" || language === "Anglais")? "Advanced" : "Avancé(e)";
    const apply = (language === "English" || language === "Anglais")? "Apply Filters" : "Appliquer des filtres";

    return (
        <div className="level-filter">
            <h2>{header}</h2>
            <div className="filter-choice">
                <label htmlFor="beginner-checkbox">{beginnerText}</label>
                <input type="checkbox" id="beginner-checkbox"></input>
            </div>
            <div className="filter-choice">
                <label htmlFor="intermediate-checkbox">{intermediateText}</label>
                <input type="checkbox" id="intermediate-checkbox"></input>
            </div>
            <div className="filter-choice">
                <label htmlFor="advanced-checkbox">{advancedText}</label>
                <input type="checkbox" id="advanced-checkbox"></input>
            </div>
            <button className="filter-btn light-button" onClick={applyFilters}>{apply}</button>
        </div>
    );
}

export default CourseFilter;