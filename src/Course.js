import { useRouteMatch } from 'react-router-dom';
import InstructionStep from "./InstructionStep";
import CourseReview from "./CourseReview";
import { imagepaths, videolinks } from './App';
import { scroller } from "react-scroll";

function Course(props) {
    function goToReviews(event) {
        event.preventDefault();
        scroller.scrollTo("course-review", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        })
        
        event.target.style.color = 'purple';
    }

    const params = useRouteMatch().params;
    const name = params['name'];

    let imgpath;
    let videolink; 
    if (name in imagepaths) {
        imgpath = imagepaths[name];
    } else {
        imgpath = 'placeholder.png';
    }

    if (name in videolinks) {
        videolink = videolinks[name]; 
    } else {
        videolink = 'http://www.youtube.com/embed/unknown';
    }

    return (
        <div className="course-page">
            <div className="course-main-banner">
                <img src={require(`./images/${imgpath}`)} alt="course preview" />
                <div className="course-main-info">
                    <h1>{name}</h1>
                    <p>Posted on July 21, 2021</p>
                    <a href="https://www.freecodecamp.org/" target="_">freeCodeCamp</a>
                    <div className="course-statistics">
                        <div className="course-main-rating">
                            <p>5.0</p>
                            <img className="course-main-stars" src={require("./icons/5stars.PNG")} alt="stars" />
                            <p className="course-main-nreviews"><button onClick={goToReviews}>(1,337 Reviews)</button></p>
                        </div>
                    </div>
                    <p>{`In this course, you will learn about ${name}`}</p>

                    <div className="course-pricing">
                        <button className="dark-button pricing">FREE</button>
                    </div>
                </div>
            </div>
            <div className="course-video">
                <iframe width="75%" height="700" src={videolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="course-instructions">
                <InstructionStep name="Instruction 1" instruction="This is Instruction 1" key={1} />
                <InstructionStep name="Instruction 2" instruction="This is Instruction 2" key={2} />
                <InstructionStep name="Instruction 3" instruction="This is Instruction 3" key={3} />
                <InstructionStep name="Instruction 4" instruction="This is Instruction 4" key={4} />
            </div>
            <CourseReview name={name}/>
        </div>
    );
}

export default Course;