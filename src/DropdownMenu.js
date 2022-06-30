import DropdownOption from "./DropdownOption";

function DropdownMenu() {
    return (
        <div className="dropdown-content">
            <div className="dropdown-col">
                <DropdownOption name="Development" arrow />
                <DropdownOption name="Photography & Video" arrow />
                <DropdownOption name="Music" arrow />
                <DropdownOption name="Design" arrow />
                <DropdownOption name="Finance & Accounting" arrow />
                <DropdownOption name="IT & Software" arrow />
                <DropdownOption name="Personal Development" arrow />
                <DropdownOption name="Health & Fitness" arrow />
            </div>
            <div className="dropdown-col">
                <DropdownOption name="Web Development" arrow />
                <DropdownOption name="Data Science" arrow />
                <DropdownOption name="Mobile Development" arrow />
                <DropdownOption name="Programming Languages" arrow />
                <DropdownOption name="Game Development" arrow />
                <DropdownOption name="Software Testing" arrow />
                <DropdownOption name="Database Design" arrow />
            </div>
            <div className="dropdown-col">
                <DropdownOption name="Python" />
                <DropdownOption name="Machine Learning" />
                <DropdownOption name="Deep Learning" />
                <DropdownOption name="Data Analysis" />
                <DropdownOption name="R" />
                <DropdownOption name="Statistics" />
                <DropdownOption name="Natural Language Processing" />
            </div>
        </div>
    );
}

export default DropdownMenu;