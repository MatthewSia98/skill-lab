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
            <button className="selected-tab" onClick={ selectTab }>Web Development</button>
            <button className="unselected-tab" onClick={ selectTab }>Data Science</button>
            <button className="unselected-tab" onClick={ selectTab }>Photography</button>
            <button className="unselected-tab" onClick={ selectTab }>Business</button>
            <button className="unselected-tab" onClick={ selectTab }>Drawing</button>
            <button className="unselected-tab" onClick={ selectTab }>Music Production</button>
            <button className="unselected-tab" onClick={ selectTab }>Painting</button>
        </div>
    );
}

export default ExploreTab;