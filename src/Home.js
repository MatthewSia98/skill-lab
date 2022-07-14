import Banner from './Banner';
import ExploreTab from "./ExploreTab";
import Carousel from "./Carousel";
import CourseCard from './CourseCard';
import React from 'react';

function Home() {
    const carouselItems =
        <React.Fragment>
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
        </React.Fragment>
    ;

    return (
        <div className="homepage">
            <Banner />
            <div className="explore-header">
                <h1>Start Exploring</h1>
                <p className="explore-description">Supercharge your learning by picking from our selection of over 5,000 courses and 150,000 videos</p>
            </div>
            <ExploreTab />
            <Carousel items={carouselItems}/>
        </div>
    );
}

export default Home;