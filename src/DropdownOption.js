import { Link } from 'react-router-dom';
import { items } from './App';

function DropdownOption(props) {
    function showTwo(event) {
        const options = [...document.querySelectorAll(".dropdown-column.one .dropdown-option")];
        const selected = event.target.closest(".dropdown-option");
        const selectedName = selected.children[0].textContent;

        const twos = [...document.querySelectorAll(".dropdown-column.two .dropdown-option")]
        twos.forEach((two) => {
            const a = two.children[0];
            a.style.color = "black"

            two.style.display = "none";
            if (a.textContent in items[selectedName]) {
                two.style.display = "flex";
            }
        });

        options.forEach((option) => {
            if (option.isSameNode(selected)) {
                option.children[0].style.color = "blue";
            } else {
                option.children[0].style.color = "black";
            }
        })

        document.querySelector(".dropdown-column.one").style.display = "flex";
        document.querySelector(".dropdown-column.two").style.display = "flex";
        document.querySelector(".dropdown-column.three").style.display = "none";
    }
      
    function showThree(event) {
        const options = [...document.querySelectorAll(".dropdown-column.two .dropdown-option")];
        const selected = event.target.closest(".dropdown-option");
        const secondName = selected.children[0].textContent;

        let firstName;
        const firsts = [...document.querySelectorAll(".dropdown-column.one .dropdown-option")];
        for (const i in firsts) {
            const curr = firsts[i];
            const a = curr.children[0];
            const color = a.style.getPropertyValue('color');
            if (color === "blue") firstName = a.textContent;
        }

        const thirds = [...document.querySelectorAll(".dropdown-column.three .dropdown-option")]
        thirds.forEach((third) => {
            const a = third.children[0];
            a.style.color = "black"

            third.style.display = "none";
            if (items[firstName][secondName].includes(a.textContent)) {
                third.style.display = "flex";
            }
        });

        options.forEach((option) => {
            if (option.isSameNode(selected)) {
                option.children[0].style.color = "blue";
            } else {
                option.children[0].style.color = "black";
            }
        })

        document.querySelector(".dropdown-column.one").style.display = "flex"
        document.querySelector(".dropdown-column.two").style.display = "flex"
        document.querySelector(".dropdown-column.three").style.display = "flex"
    }

    function colorThree(event) {
        const options = [...document.querySelectorAll(".dropdown-column.three .dropdown-option")];
        const selected = event.target.closest(".dropdown-option");

        options.forEach((option) => {
            if (option.isSameNode(selected)) {
                option.children[0].style.color = "blue";
            } else {
                option.children[0].style.color = "black";
            }
        })
    }

    function handleEnter(col) {
        if (col === "1") {
            return showTwo;
        } else if (col === "2") {
            return showThree;
        } else if (col === "3") {
            return colorThree;
        }
    }
    
    if (props.arrow) {
        return (
            <div className={"dropdown-option "  + props.parent} onMouseEnter={handleEnter(props.col)}>
                <Link className="dropdown-name" to={"/category/" + props.col + "/" + props.name}>{props.name}</Link>
                <img className="dropdown-arrow" src={require("./icons/right-arrow.jpg")} alt="right arrow" />
            </div>
        );
    } else {
        return (
            <div className="dropdown-option" onMouseEnter={handleEnter(props.col)}>
                <Link className="dropdown-name" to={"/course/" + props.name}>{props.name}</Link>
            </div>
        );
    }
}

export default DropdownOption;