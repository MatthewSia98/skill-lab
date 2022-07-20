import ReviewCard from "./ReviewCard";
import ReviewBar from "./ReviewBar";
import React, { useState } from 'react';

var submittedReviews = [<React.Fragment><ReviewCard name="John Doe" summary="Great overall" date="May 2, 2022" rating="5" review="The course was great. The instructor spoke a bit too fast at times."/></React.Fragment>,
                        <React.Fragment><ReviewCard name="Jane Doe" summary="No explanations at all!" date="June 2, 2021" rating="2" review="He doesn't go in detail in his code. Just writes random code and doesn't explain things. I am already an experienced, but I'm talking from a beginner's point of view. He's literally just writing code and doesn't explain things."/></React.Fragment>                            
                        ]
function CourseReview(props) {
    const language = props.language;
    const [reviews, setReviews] = useState(submittedReviews);

    function submitReview(event) {
        const searchbar = document.querySelector(".review-input")
        let reviewText;

        if (event.key === "Enter" || event.type === "click") {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const month = today.toLocaleString('default', {month: 'long'});
            const yyyy = today.getFullYear();
            const date = month + ' ' + dd + ', ' + yyyy;

            reviewText = searchbar.value;
            searchbar.value = "";
            const rating = document.querySelector(".rating-input select").value;
            
            const name = (language === "English" || language === "Anglais")? "You" : "Tu";
            submittedReviews.unshift(
                <React.Fragment>
                    <ReviewCard name={name} summary={reviewText.substr(0, 20)} date={date} rating={rating} review={reviewText}/>
                </React.Fragment>
            )

            setReviews(submittedReviews.slice());
        }
    }

    const header = (language === "English" || language === "Anglais")? "Course Reviews" : "Revues de cours";
    const review = (language === "English" || language === "Anglais")? "Reviews" : "avis";
    const rating = (language === "English" || language === "Anglais")? "Rating" : "Évaluation";
    const submit = (language === "English" || language === "Anglais")? "Submit Review" : "Poster le commentaire";
    const out = (language === "English" || language === "Anglais")? "out of" : "sur";
    const write = (language === "English" || language === "Anglais")? "Write a Review" : "Écrire une critique";

    return (
        <div id="reviews" className="course-review">
            <div className="course-review-stats">
                <div className="course-review-basic">
                    <h3>{header}</h3>
                    <div className="course-review-rating">
                        <img className="course-review-stars" src={require("./icons/5stars.PNG")} alt="stars" />
                        <p className="course-review-oo5">5.0 {out} 5.0</p>
                    </div>
                    <p className="course-nreviews">1337 {review}</p>
                </div>
                <div className="review-bars"> 
                    <ReviewBar nstar="5" percentage="75" course={props.name} language={language} />
                    <ReviewBar nstar="4" percentage="15" course={props.name} language={language} />
                    <ReviewBar nstar="3" percentage="7" course={props.name} language={language} />
                    <ReviewBar nstar="2" percentage="2" course={props.name} language={language} />
                    <ReviewBar nstar="1" percentage="1" course={props.name} language={language} />
                </div>
            </div>
            <div className="course-review-content">
                <div className="review-searchbar">
                    <input className="review-input" type="text" placeholder={write} onKeyPress={submitReview} />
                    <div className="rating-input">
                        <label htmlFor="review-input-stars">{rating}</label>
                        <select name="review-input-stars" id="review-input-stars">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <button onClick={submitReview} className="submit-review">{submit}</button>
                <div className="submitted-reviews">
                    {reviews}
                </div>
            </div>
        </div>
    );
}

export default CourseReview;