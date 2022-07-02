function CourseStars() {
    return (
        <div className="course-rating">
            <p>5.0</p>
            <img className="course-stars" src={require("./icons/5stars.PNG")} alt="stars" />
            <p className="course-main-nreviews">(1,337)</p>
        </div>
    );
}

export default CourseStars;