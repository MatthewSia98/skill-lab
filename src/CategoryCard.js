import React from 'react';
import CourseCard from './CourseCard';
import Carousel from './Carousel';
import { items } from './App';

function CategoryCard(props) {
    const thirds = items[props.first][props.second];
    const carouselItems = [];
    for (let i = 0; i < thirds.length; i++) {
        const currThird = thirds[i];
        let path;
        if (i % 4 === 0) path = './images/what-is-web-development.png';
        else if (i % 4 === 1) path = './images/making-your-first-web-app.png';
        else if (i % 4 === 2) path = './images/html-for-beginners.png';
        else path = './images/learn-bootstrap.png'

        carouselItems.push(<CourseCard path={path} name={currThird} org="freeCodeCamp" first={props.first} second={props.second} key={i} />);
    }

    return (
        <div className="category-card">
            <h2>{props.second}</h2>
            <Carousel first={props.first} second={props.second} items={carouselItems} />
        </div>
    );
}

export default CategoryCard;