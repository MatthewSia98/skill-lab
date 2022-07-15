import { Link } from 'react-router-dom';

function ReviewBar(props) {
    return (
        <div className="review-bar">
            <p><Link to={`#reviews`}>{props.nstar} star</Link></p>
            <Link to={`#reviews`}><img className="review-bar-icon" src={require("./icons/" + props.percentage + "-bar.PNG")} alt="review bar" /></Link>
            <p className="review-percentage"><Link to={`#reviews`}>{props.percentage}%</Link></p>
        </div>
    );
}

export default ReviewBar;