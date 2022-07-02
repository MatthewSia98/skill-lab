import leftArrow from './icons/left-arrow.jpg';
import rightArrow from './icons/right-arrow.jpg';
import CourseCard from './CourseCard';

function Carousel() {    
    const shift = 115;
    function moveCarousel (event) {
        event.preventDefault();
        const clicked = event.target.closest(".carousel-button");
        const courseCards = [...document.querySelectorAll(".course-card")];

        if (clicked.matches(".carousel-button.left")) {
            courseCards.forEach((card) => {
                const transform = card.style.getPropertyValue("transform");
                let curr = transform.substr(11,).slice(0, -2);

                if (isNaN(parseInt(curr))) {
                    curr = 0;
                } else {
                    curr = parseInt(curr);
                }
                console.log(curr);
                if (curr >= 6 * shift) {
                    card.style.transform = `translateX(${-courseCards.length * shift + shift}%)`;
                }
                else {
                    card.style.transform = `translateX(${curr + shift}%)`;
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
                console.log(curr);
                if (curr <= -courseCards.length * shift + shift) {
                    card.style.transform = "translateX(0%)";
                } else {
                    card.style.transform = `translateX(${curr - shift}%)`;
                }
            })
        }
    }

    return (
        <div className="carousel">
            <button className="carousel-button left"><img className="carousel-arrow" src={leftArrow} alt="left arrow" onClick={moveCarousel} /></button>
            <div className="courses">
                <CourseCard path="./images/what-is-web-development.png" name="Introduction to Web Development" org="freeCodeCamp" />
                <CourseCard path="./images/making-your-first-web-app.png" name="Making your first web app" org="freeCodeCamp" />
                <CourseCard path="./images/html-for-beginners.png" name="HTML for beginners" org="freeCodeCamp" />
                <CourseCard path="./images/learn-bootstrap.png" name="Learn Bootstrap" org="freeCodeCamp" />
                <CourseCard path="./images/learn-bootstrap.png" name="Learn Bootstrap" org="freeCodeCamp" />
                <CourseCard path="./images/html-for-beginners.png" name="HTML for beginners" org="freeCodeCamp" />
                <CourseCard path="./images/making-your-first-web-app.png" name="Making your first web app" org="freeCodeCamp" />
                <CourseCard path="./images/what-is-web-development.png" name="Introduction to Web Development" org="freeCodeCamp" />
                <CourseCard path="./images/what-is-web-development.png" name="Introduction to Web Development" org="freeCodeCamp" />
                <CourseCard path="./images/making-your-first-web-app.png" name="Making your first web app" org="freeCodeCamp" />
                <CourseCard path="./images/html-for-beginners.png" name="HTML for beginners" org="freeCodeCamp" />
                <CourseCard path="./images/learn-bootstrap.png" name="Learn Bootstrap" org="freeCodeCamp" />
                <CourseCard path="./images/learn-bootstrap.png" name="Learn Bootstrap" org="freeCodeCamp" />
                <CourseCard path="./images/html-for-beginners.png" name="HTML for beginners" org="freeCodeCamp" />
                <CourseCard path="./images/making-your-first-web-app.png" name="Making your first web app" org="freeCodeCamp" />
                <CourseCard path="./images/what-is-web-development.png" name="Introduction to Web Development" org="freeCodeCamp" />
            </div>
            <button className="carousel-button right"><img className="carousel-arrow" src={rightArrow} alt="right arrow" onClick={moveCarousel} /></button>
        </div>
    );
}

export default Carousel;