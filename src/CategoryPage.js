import { Link, useRouteMatch } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import CourseCard from './CourseCard';
import Carousel from './Carousel';
import { items } from './App';
import CourseFilter from './CourseFilter';

function CategoryPage() {
    const params = useRouteMatch().params;
    const col = params['col'];
    const category = params['name'];

    if (col === '1') {
        const seconds = items[category];
        const secondKeys = Object.keys(seconds);

        const secondDivs = [];
        for (let i = 0; i < secondKeys.length; i++) {
            let backgroundColor;
            if (i % 2 === 0) backgroundColor = 'pink';
            else backgroundColor = 'green'; 

            secondDivs.push(<CategoryCard first={category} second={secondKeys[i]} key={i} style={{background: backgroundColor}} />);
        }

        return (
            <div className="category-page">
                <div className="category-page-header">
                    <h1>{category}</h1>
                    <CourseFilter />
                </div>
                <div className="seconds">{secondDivs}</div>
            </div>
        );
    } else if (col === '2') {
        const firsts = Object.keys(items);
        var selectedFirst;
        for (let i = 0; i < firsts.length; i++) {
            const currFirst = firsts[i];
            if (category in items[currFirst]) selectedFirst = currFirst;
        }

        const thirds = items[selectedFirst][category]
        const courseDivs = [];
        for (let i = 0; i < thirds.length; i++) {
            const currThird = thirds[i];
            let path;
            if (i % 4 === 0) path = './images/what-is-web-development.png';
            else if (i % 4 === 1) path = './images/making-your-first-web-app.png';
            else if (i % 4 === 2) path = './images/html-for-beginners.png';
            else path = './images/learn-bootstrap.png'

            courseDivs.push(<CourseCard path={path} name={currThird} org="freeCodeCamp" key={i} />);
        }

        return (
            <div className="category-page">
                <div className="category-page-header">
                    <div className="breadcrumb">
                        <h1><Link to={'/category/1/' + selectedFirst}>{selectedFirst}</Link></h1> 
                        <pre>  >  </pre>
                        <h1>{category}</h1>
                    </div>
                    <CourseFilter />
                </div>
                <Carousel items={courseDivs} second={category}/>
            </div>
        );
    }
}

export default CategoryPage;