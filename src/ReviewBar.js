function ReviewBar(props) {
    return (
        <div className="review-bar">
            <p><a href="#reviews">{props.nstar} star</a></p>
            <a href="#reviews"><img className="review-bar-icon" src={require("./icons/" + props.percentage + "-bar.PNG")} alt="review bar" /></a>
            <p className="review-percentage"><a href="#reviews">{props.percentage}%</a></p>
        </div>
    );
}

export default ReviewBar;