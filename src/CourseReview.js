import ReviewCard from "./ReviewCard";
import ReviewBar from "./ReviewBar";

function CourseReview(props) {
    function searchReviews(event) {
        const searchbar = document.querySelector(".review-input")

        if (event.key === "Enter" || event.type === "click") {
            searchbar.value = "";
        }
    }

    return (
        <div id="reviews" className="course-review">
            <div className="course-review-stats">
                <div className="course-review-basic">
                    <h3>Course Reviews</h3>
                    <div className="course-review-rating">
                        <img className="course-review-stars" src={require("./icons/5stars.PNG")} alt="stars" />
                        <p className="course-review-oo5">5.0 out of 5.0</p>
                    </div>
                    <p className="course-nreviews">1337 Ratings</p>
                </div>
                <div className="review-bars"> 
                    <ReviewBar nstar="5" percentage="75" course={props.name} />
                    <ReviewBar nstar="4" percentage="15" course={props.name} />
                    <ReviewBar nstar="3" percentage="7" course={props.name} />
                    <ReviewBar nstar="2" percentage="2" course={props.name} />
                    <ReviewBar nstar="1" percentage="1" course={props.name} />
                </div>
            </div>
            <div className="course-review-content">
                <div className="review-searchbar">
                    <input className="review-input" type="text" placeholder="Search Reviews" onKeyPress={searchReviews} />
                    <img className="review-search-icon" src={require("./icons/search.png")} alt="search icon" onClick={searchReviews} />
                </div>
                <ReviewCard name="John Doe" summary="Great overall" date="May 2, 2022" review="The course was great. The instructor spoke a bit too fast at times." />
                <ReviewCard name="Jane Doe" summary="No explanations at all!" date="June 2, 2021" review="He doesn't go in detail in his code. Just writes random code and doesn't explain things. I am already an experienced, but I'm talking from a beginner's point of view. He's literally just writing code and doesn't explain things." />
            </div>
        </div>
    );
}

export default CourseReview;