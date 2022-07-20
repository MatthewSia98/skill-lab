import { levels } from './App';

function CourseFilter() {
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

    return (
        <div className="level-filter">
            <h2>Filter Courses</h2>
            <div className="filter-choice">
                <label htmlFor="beginner-checkbox">Beginner</label>
                <input type="checkbox" id="beginner-checkbox"></input>
            </div>
            <div className="filter-choice">
                <label htmlFor="intermediate-checkbox">Intermediate</label>
                <input type="checkbox" id="intermediate-checkbox"></input>
            </div>
            <div className="filter-choice">
                <label htmlFor="advanced-checkbox">Advanced</label>
                <input type="checkbox" id="advanced-checkbox"></input>
            </div>
            <button className="filter-btn light-button" onClick={applyFilters}>Apply Filters</button>
        </div>
    );
}

export default CourseFilter;