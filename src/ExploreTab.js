function ExploreTab() {
    function selectTab(event) {
        const all = [...document.querySelectorAll(".unselected-tab")];
        all.forEach((e) => {e.className = "unselected-tab"});

        const active = document.querySelector(".selected-tab");
        if (active) active.className = "unselected-tab";

        event.target.className = "selected-tab";
    }

    return (
        <div className="tabs">
            <a href="#"><button className="unselected-tab" onClick={ selectTab }>Web Development</button></a>
            <a href="#"><button className="unselected-tab" onClick={ selectTab }>Data Science</button></a>
            <a href="#"><button className="unselected-tab" onClick={ selectTab }>Photography</button></a>
            <a href="#"><button className="unselected-tab" onClick={ selectTab }>Business</button></a>
            <a href="#"><button className="unselected-tab" onClick={ selectTab }>Drawing</button></a>
            <a href="#"><button className="unselected-tab" onClick={ selectTab }>Music Production</button></a>
            <a href="#"><button className="unselected-tab" onClick={ selectTab }>Painting</button></a>
        </div>
    );
}

export default ExploreTab;