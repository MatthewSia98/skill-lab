import leftArrow from './icons/left-arrow.jpg';
import rightArrow from './icons/right-arrow.jpg';

function Carousel(props) {    
    const shift = 100;
    let first = props.first;
    let second = props.second;
    if (first === undefined) first = ''
    if (second === undefined) second = ''

    function moveCarousel (event) {
        event.preventDefault();
        const clicked = event.target.closest(".carousel-button");

        let courseCards;
        if (first === '') courseCards = [...document.querySelectorAll(".courses .course-card")];
        else courseCards = [...document.querySelectorAll(".courses." + first.replace(/\s/g, '') + "." + second.replace(/\s/g, '') + " " + ".course-card")];
        const coursesWidth = document.querySelector(".courses").clientWidth;
        const marginPercentage = 20 * (courseCards.length - 1) / coursesWidth * 100;
        const ncards = coursesWidth / (courseCards[0].clientWidth + 40);

        if (clicked.matches(".carousel-button.left")) {
            courseCards.forEach((card) => {
                const transform = card.style.getPropertyValue("transform");
                let curr = transform.substr(11,).slice(0, -2);

                if (isNaN(parseInt(curr))) {
                    curr = 0;
                } else {
                    curr = parseInt(curr);
                }

                if (curr >= (ncards - 1) * (shift + marginPercentage)) {
                    card.style.transform = `translateX(${-(courseCards.length - 1) * (shift + marginPercentage)}%)`;
                }
                else {
                    card.style.transform = `translateX(${curr + shift + marginPercentage}%)`;
                }
            })
        } else if (clicked.matches(".carousel-button.right")) {
            courseCards.forEach((card) => {
                const transform = card.style.getPropertyValue("transform");
                let curr = parseInt(transform.substr(11,).slice(0, -2));

                if (isNaN(parseInt(curr))) {
                    curr = 0;
                } else {
                    curr = parseInt(curr);
                }

                if (curr <= -(courseCards.length - 1) * (shift + marginPercentage)) {
                    card.style.transform = "translateX(0%)";
                } else {
                    card.style.transform = `translateX(${curr - shift - marginPercentage}%)`;
                }
            })
        }
    }

    return (
        <div className={"carousel " + first.replace(/\s/g, '') + " " +  second.replace(/\s/g, '')} style={props.style}>
            <button className="carousel-button left"><img className="carousel-arrow" src={leftArrow} alt="left arrow" onClick={moveCarousel} /></button>
            <div className={"courses " + first.replace(/\s/g, '') + " " + second.replace(/\s/g, '')}>
                {props.items}
            </div>
            <button className="carousel-button right"><img className="carousel-arrow" src={rightArrow} alt="right arrow" onClick={moveCarousel} /></button>
        </div>
    );
}

export default Carousel;