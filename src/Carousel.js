import leftArrow from './icons/left-arrow.jpg';
import rightArrow from './icons/right-arrow.jpg';
import CourseCard from './CourseCard';

function Carousel() {    
    function moveCarousel (event) {
        const carousel = document.querySelector(".carousel");
        let sliderIdx = parseInt(getComputedStyle(carousel).getPropertyValue("--slider-index"));

        const clicked = event.target.closest(".carousel-button");

        const courseCards = [...document.querySelectorAll(".course-card")];

        if (clicked.matches(".carousel-button.left")) {
            sliderIdx--;
            if (sliderIdx <= -courseCards.length - 5) sliderIdx = 0;
            courseCards.forEach((card) => {
                carousel.style.setProperty("--slider-index", sliderIdx);
                card.style.transform = `translateX(${100 * sliderIdx}%)`;
            })
        } else if (clicked.matches(".carousel-button.right")) {
            sliderIdx++;
            if (sliderIdx >= courseCards.length + 5) sliderIdx = 0;
            courseCards.forEach((card) => {
                carousel.style.setProperty("--slider-index", sliderIdx);
                card.style.transform = `translateX(${-100 * sliderIdx}%)`;
            })
        }
    }

    return (
        <div className="carousel">
            <button className="carousel-button left" onClick={moveCarousel}><img className="carousel-arrow" src={leftArrow} alt="left arrow" onClick={moveCarousel} /></button>
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
            <button className="carousel-button right" onClick={moveCarousel}><img className="carousel-arrow" src={rightArrow} alt="right arrow" onClick={moveCarousel} /></button>
        </div>
    );
}

export default Carousel;