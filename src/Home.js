import Banner from './Banner';
import ExploreTab from "./ExploreTab";
import Carousel from "./Carousel";
import CourseCard from './CourseCard';
import { items } from './App';
import React from 'react';

export const homeCategories = ['Web Development', 'Data Science', 'Digital Photography', 'Finance', 'Instruments', 'Music Production', 'Economics'];

function Home() {
    const carousels = [];
    for (const first in items) {
        for (const second in items[first]) {
            const carouselItems = [];
            if (homeCategories.includes(second)) {
                const thirds = items[first][second];
                for (let i = 0; i < thirds.length; i++) {
                    const third = thirds[i];
                    let path;
                    if (i % 4 === 0) path = './images/what-is-web-development.png';
                    else if (i % 4 === 1) path = './images/making-your-first-web-app.png';
                    else if (i % 4 === 2) path = './images/html-for-beginners.png';
                    else path = './images/learn-bootstrap.png'
                    carouselItems.push(<CourseCard first={first} second={second} path={path} name={third} org="freeCodeCamp" key={first + second + i}/>);
                }
                let carousel;
                if (second === homeCategories[0]) carousel = <Carousel first={first} second={second} items={carouselItems} style={{display: 'flex'}} key={second} />;
                else carousel = <Carousel first={first} second={second} items={carouselItems} style={{display: 'none'}} key={second} />;
                carousels.push(carousel);
            }
        }
    }

    return (
        <div className="homepage">
            <Banner />
            <div className="explore-header">
                <h1>Start Exploring</h1>
                <p className="explore-description">Supercharge your learning by picking from our selection of over 5,000 courses and 150,000 videos</p>
            </div>
            <ExploreTab categories={homeCategories} />
            {carousels}
        </div>
    );
}

export default Home;