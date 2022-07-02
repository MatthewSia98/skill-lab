import Banner from './Banner';
import ExploreTab from "./ExploreTab";
import Carousel from "./Carousel";

function Home() {
    return (
        <div className="homepage">
            <Banner />
            <div className="explore-header">
                <h1>Start Exploring</h1>
                <p className="explore-description">Supercharge your learning by picking from our selection of over 5,000 courses and 150,000 videos</p>
            </div>
            <ExploreTab />
            <Carousel />
        </div>
    );
}

export default Home;