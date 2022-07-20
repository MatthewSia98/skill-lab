import { useRouteMatch } from 'react-router-dom';
import InstructionStep from "./InstructionStep";
import CourseReview from "./CourseReview";
import Navbar from "./Navbar";
import { imagepaths, videolinks } from './App';
import { scroller } from "react-scroll";

function Course(props) {
    const language = props.language;
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

    const posted = (language === "English" || language === "Anglais")? "Posted on" : "Publié le";
    const reviews = (language === "English" || language === "Anglais")? "Reviews" : "avis";
    const learn = (language === "English" || language === "Anglais")? "In this course, you will learn about" : "Dans ce cours, vous découvrirez";
    const free = (language === "English" || language === "Anglais")? "FREE" : "Gratis";
    const instruction = (language === "English" || language === "Anglais")? "Instruction" : "Consigne";
    const instructionDesc = (language === "English" || language === "Anglais")? "This is Instruction" : "C'est la consigne";

    return (
        <div className="course-page">
            <Navbar language={language}/>
            <div className="course-main-banner">
                <img src={require(`./images/${imgpath}`)} alt="course preview" />
                <div className="course-main-info">
                    <h1>{name}</h1>
                    <p>{posted} July 21, 2021</p>
                    <a href="https://www.freecodecamp.org/" target="_">freeCodeCamp</a>
                    <div className="course-statistics">
                        <div className="course-main-rating">
                            <p>5.0</p>
                            <img className="course-main-stars" src={require("./icons/5stars.PNG")} alt="stars" />
                            <p className="course-main-nreviews"><button onClick={goToReviews}>(1,337 {reviews})</button></p>
                        </div>
                    </div>
                    <p>{`${learn} ${name}`}</p>

                    <div className="course-pricing">
                        <button className="dark-button pricing">{free}</button>
                    </div>
                </div>
            </div>
            <div className="course-video">
                <iframe width="75%" height="700" src={videolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="course-instructions">
                <InstructionStep name={`${instruction} 1`} instruction={`${instructionDesc} 1`} key={1} />
                <InstructionStep name={`${instruction} 2`} instruction={`${instructionDesc} 1`} key={2} />
                <InstructionStep name={`${instruction} 3`} instruction={`${instructionDesc} 1`} key={3} />
                <InstructionStep name={`${instruction} 4`} instruction={`${instructionDesc} 1`} key={4} />
            </div>
            <CourseReview name={name} language={language}/>
        </div>
    );
}

export default Course;