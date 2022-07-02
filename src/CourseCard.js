import CourseStars from './CourseStars';
import { Link } from 'react-router-dom';

function CourseCard(props) {
    return (
        <div className="course-card">
            <div className="course-banner">
                <Link to="/course"><img className="course-preview" src={ require(`${props.path}`) } alt="course preview"/></Link>
            </div>
            <div className="course-info">
                <h4>{ props.name }</h4>
                <p><a href="https://www.freecodecamp.org/" target="_">{ props.org }</a></p>
                <CourseStars />
            </div>
        </div>
    );
}

export default CourseCard;