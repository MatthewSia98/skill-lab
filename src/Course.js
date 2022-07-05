import InstructionStep from "./InstructionStep";
import CourseReview from "./CourseReview";

function Course() {
    return (
        <div className="course-page">
            <div className="course-main-banner">
                <img src={require("./images/making-your-first-web-app.png")} alt="course preview" />
                <div className="course-main-info">
                    <h1>Making your first web app</h1>
                    <a href="https://www.freecodecamp.org/" target="_">freeCodeCamp</a>
                    <div className="course-statistics">
                        <div className="course-main-rating">
                            <p>5.0</p>
                            <img className="course-main-stars" src={require("./icons/5stars.PNG")} alt="stars" />
                            <p className="course-main-nreviews"><a href="#reviews">(1,337 Reviews)</a></p>
                        </div>
                        <p>Posted on July 21, 2021</p>
                    </div>
                    <p>In this course, you will learn how to build your first web application using HTML, Sass, and Javascript</p>

                    <div className="course-pricing">
                        <button className="dark-button pricing">FREE</button>
                    </div>
                </div>
            </div>
            <div className="course-video">
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/y51Cv4wnsPw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="course-instructions">
                <InstructionStep name="Installing Software" instruction={["You can download Sass ", <a href="https://sass-lang.com/" target="_">here</a>, "."]} />
                <InstructionStep name="HTML" instruction={["You can download Sass ", <a href="https://sass-lang.com/" target="_">here</a>, "."]} />
                <InstructionStep name="Sass" instruction={["You can download Sass ", <a href="https://sass-lang.com/" target="_">here</a>, "."]} />
                <InstructionStep name="JavaScript" instruction={["You can download Sass ", <a href="https://sass-lang.com/" target="_">here</a>, "."]} />
            </div>
            <CourseReview />
        </div>
    );
}

export default Course;