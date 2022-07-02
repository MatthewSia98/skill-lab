function ReviewCard(props) {
    return (
        <div className="review-card">
            <div className="review-top">
                <img className="person-icon" src={require("./icons/person.png")} alt="person icon" />
                <div className="review-stats">
                    <div className="person-name">
                        <h1>{props.name}</h1>
                    </div>
                    <div className="person-rating">
                        <img className="person-stars" src={require("./icons/5stars.PNG")} alt="stars" />
                        <p className="person-summary">{props.summary}</p>
                    </div>
                    <div className="review-date">
                        <p>Reviewed on {props.date}</p>
                    </div>
                </div>
            </div>
            <div className="review-bottom">
                <p>{props.review}</p>
            </div>
        </div>
    );
}

export default ReviewCard;